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

  scope "/", Hours do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end

  scope "/api", Hours do
    pipe_through :api

    scope "/v1" do
      resources "/games", GameController, only: [:index, :create]
      resources "/records", RecordController, only: [:index, :create]
    end
  end

  # Other scopes may use custom stacks.
  # scope "/api", Hours do
  #   pipe_through :api
  # end
end
