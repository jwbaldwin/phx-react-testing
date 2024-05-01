defmodule PhxReactWeb.PageLive do
  use PhxReactWeb, :live_view

  @impl true
  def render(assigns) do
    ~H"""
    <div class="text-green-500">this is from liveview</div>
    <button
      class="h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      phx-click="log_event"
    >
      Send toast from liveview
    </button>
    <div id="greeting" phx-hook="Greeter" data-name="react component" phx-update="ignore"></div>
    <div class="py-10">
      <button class="py-3 px-8 font-medium bg-orange-600 text-white rounded-2xl border-2 border-orange-500">
        Delete
      </button>
    </div>
    """
  end

  @impl true
  def handle_event("actions.countInc_" <> element_id, %{"newCount" => new_count}, socket) do
    socket = assign(socket, count: new_count)

    {:noreply, push_event(socket, "react.update_count_" <> element_id, %{newCount: new_count})}
  end

  def handle_event("log_event", _params, socket) do
    {:noreply, push_event(socket, "toaster", %{text: "test from lv"})}
  end
end
