defmodule PhxReactWeb.TestController do
  use PhxReactWeb, :controller

  def index(conn, _) do
    json(conn, %{data: "test"})
  end
end
