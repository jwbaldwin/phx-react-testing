import { mount } from "./mounter";
import { Greeter, GreeterProps } from "../app/greeter";
import Login from "../app/login";

let Hooks = {} as any;

Hooks.LoginHook = {
  mounted() {
    console.log("mount login");
    this.unmountComponent = mount(this.el.id, Login);
  },
  destroyed() {
    if (!this.unmountComponent) {
      return;
    }

    this.unmountComponent(this.el);
  },
};

Hooks.Greeter = {
  mounted() {
    this.handleEvent(
      `react.update_count_${this.el.id}`,
      ({ newCount: newCount }) => {
        mount(this.el.id, Greeter, this.opts(newCount));
      },
    );

    this.unmountComponent = mount(this.el.id, Greeter, this.opts());
  },

  destroyed() {
    if (!this.unmountComponent) {
      console.error("Greeter unmountComponent not set");
      return;
    }

    this.unmountComponent(this.el);
  },

  updateCount(newCount: number) {
    this.pushEventTo(this.el, `actions.countInc_${this.el.id}`, {
      newCount: newCount,
    });
  },

  opts(givenCount = 0): GreeterProps {
    return {
      name: this.el.dataset.name || "Counters",
      count: givenCount,
      updateCount: this.updateCount.bind(this),
    };
  },
};

export default Hooks;
