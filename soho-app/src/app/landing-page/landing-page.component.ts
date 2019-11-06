import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  handler: any;

  constructor() {}

  ngOnInit() {
    this.handler = Stripe(environment.stripe.apiKey);
  }

  async checkout(type: "monthly" | "yearly") {
    const plan =
      type === "monthly"
        ? environment.stripe.products.monthly
        : environment.stripe.products.yearly;

    try {
      const result = await this.handler.redirectToCheckout({
        items: [{ plan, quantity: 1 }],

        successUrl: environment.stripe.redirectUrl,
        cancelUrl: environment.stripe.redirectUrl,
      });

      if (result.error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result.error.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error,
      });
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
}
