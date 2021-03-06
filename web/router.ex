defmodule Hours.Router do
  use Hours.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end
  
  scope "/api", Hours do
    pipe_through :api

    scope "/v1" do
      resources "/games", GameController
      get "/people/:id/games", PersonController, :games
      resources "/people", PersonController
      resources "/records", RecordController, only: [:create, :index, :delete]
      get "/records/hours", RecordController, :hours
    end
  end
  
  scope "/", Hours do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end


  # Other scopes may use custom stacks.
  # scope "/api", Hours do
  #   pipe_through :api
  # end
end
