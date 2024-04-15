defmodule PhxReactWeb.LoginLive do
  use PhxReactWeb, :live_view

  @impl true
  def render(assigns) do
    ~H"""
    <div id="mount-login" phx-hook="LoginHook" phx-update="ignore"></div>
    """
  end
end
