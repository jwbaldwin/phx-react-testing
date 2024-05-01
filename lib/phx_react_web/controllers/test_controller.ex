defmodule PhxReactWeb.TestController do
  use PhxReactWeb, :controller

  def index(conn, _) do
    conn
    |> render_inertia("Home", %{name: "James"})
  end

  def test_json(conn, _) do
    json(conn, %{data: "test"})
  end
end
