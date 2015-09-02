get '/' do
  erb :index
end

post '/start' do 
  name1 = params[:player1]
  name2 = params[:player2]

  player1 = Player.find_or_create_by(name: name1)
  player2 = Player.find_or_create_by(name: name2)

  game = Game.create

  game.players << player1
  game.players << player2

  session[:player1_id] = player1.id
  session[:player2_id] = player2.id

  redirect to "/game/#{game.id}"
end

get "/game/:id" do
  @player1 = Player.find(session[:player1_id])
  @player2 = Player.find(session[:player2_id])

  @game_id = params[:id]
  session[:time] = Time.now

  erb :game
end

post '/result/:id' do
 @game = Game.find(params[:id])
 
 @duration = Time.now - session[:time]
 @game.update(winner_id: params[:winner_id], duration: @duration )
 redirect to "/result/#{@game.id}" 
end

get "/result/:id" do
  @game = Game.find(params[:id])
  @winner = Player.find(@game.winner_id)
  erb :results
end

get "/history" do
 @game = Game.all
 erb :history
end