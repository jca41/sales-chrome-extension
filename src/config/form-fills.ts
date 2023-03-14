import { PROPOSITIONS } from "../constants";

export default {
  [PROPOSITIONS.NBCU]: {
    us: (selectedCard) => {
      const $ = document.querySelector.bind(document);

      const focusAndFill = (selector, value) => {
        const el = $(selector);
        if (!el) return;
        el.value = value;
        ["input", "click", "change", "blur"].forEach((event) => {
          const changeEvent = new Event(event, {
            bubbles: true,
            cancelable: true,
          });
          el.dispatchEvent(changeEvent);
        });
      };

      focusAndFill("[name=title]", "Mr");
      focusAndFill("[name=firstName]", "Randal");
      focusAndFill("[name=lastName]", "Jester");
      focusAndFill("[name=mobile]", "+07777777777");
      const uniqueEmail = "a" + new Date().getTime() + "@testmail.com";
      focusAndFill("[name=email]", uniqueEmail);
      focusAndFill("[name=confirmEmail]", uniqueEmail);
      focusAndFill("[name=mobileNumber]", "07777777646");
      focusAndFill("[name=password]", "peacock1234");
      focusAndFill("[name=confirmPassword]", "peacock1234");
      $("[name=terms]") &&
        ($("[name=terms]").focus(), ($("[name=terms]").checked = !0));
      focusAndFill(
        "[name=captcha]",
        document.cookie.replace(
          /(?:(?:^|.*;\s*)captchaValue\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        )
      );
      focusAndFill("[name=gender", "Man");
      focusAndFill("[name=birthYear", "2000");
      focusAndFill("[name=zipCode", "12345");
      focusAndFill("[name=addresseeFirstName]", "Randal");
      focusAndFill("[name=addresseeLastName]", "Jester");
      focusAndFill("[name=addressLine1", "1");
      focusAndFill("[name=addressLine3", "Cricket Lane");
      focusAndFill("[name=town", "Houston");
      focusAndFill("[name=county", "TX");
      focusAndFill("[name=postcode", "77001");
      focusAndFill("[name=expiry", selectedCard.expiry);
    },
  },
  [PROPOSITIONS.SKYSHOWTIME]: {
    pl: (selectedCard) => {
      const $ = document.querySelector.bind(document);

      const focusAndFill = (selector, value) => {
        const el = $(selector);
        if (!el) return;
        el.value = value;
        ["input", "click", "change", "blur"].forEach((event) => {
          const changeEvent = new Event(event, {
            bubbles: true,
            cancelable: true,
          });
          el.dispatchEvent(changeEvent);
        });
      };

      focusAndFill("[name=title]", "Ms");
      focusAndFill("[name=firstName]", "Maria");
      focusAndFill("[name=lastName]", "Skłodowska-Curie");
      focusAndFill("[name=mobile]", "+07777777777");
      const uniqueEmail = "a" + new Date().getTime() + "@testmail.com";
      focusAndFill("[name=email]", uniqueEmail);
      focusAndFill("[name=confirmEmail]", uniqueEmail);
      focusAndFill("[name=password]", "showtime123");
      focusAndFill("[name=confirmPassword]", "showtime123");
      $("[name=terms]") &&
        ($("[name=terms]").focus(), ($("[name=terms]").checked = !0));
      focusAndFill(
        "[name=captcha]",
        document.cookie.replace(
          /(?:(?:^|.*;\s*)captchaValue\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        )
      );
      focusAndFill("[name=addresseeFirstName]", "Maria");
      focusAndFill("[name=addresseeLastName]", "Skłodowska-Curie");
      focusAndFill("[name=addressLine1", "1");
      focusAndFill("[name=addressLine3", "Cricket Lane");
      focusAndFill("[name=town", "Houston");
      focusAndFill("[name=county", "TX");
      focusAndFill("[name=postcode", "11-111");
      focusAndFill("[name=expiry", selectedCard.expiry);
    },
    nl: (selectedCard) => {
      const $ = document.querySelector.bind(document);

      const focusAndFill = (selector, value) => {
        const el = $(selector);
        if (!el) return;
        el.value = value;
        ["input", "click", "change", "blur"].forEach((event) => {
          const changeEvent = new Event(event, {
            bubbles: true,
            cancelable: true,
          });
          el.dispatchEvent(changeEvent);
        });
      };

      focusAndFill("[name=title]", "Mr");
      focusAndFill("[name=firstName]", "Edsger");
      focusAndFill("[name=lastName]", "Dijkstra");
      focusAndFill("[name=mobile]", "+07777777777");
      const uniqueEmail = "a" + new Date().getTime() + "@testmail.com";
      focusAndFill("[name=email]", uniqueEmail);
      focusAndFill("[name=confirmEmail]", uniqueEmail);
      focusAndFill("[name=password]", "showtime123");
      focusAndFill("[name=confirmPassword]", "showtime123");
      $("[name=terms]") &&
        ($("[name=terms]").focus(), ($("[name=terms]").checked = !0));
      focusAndFill(
        "[name=captcha]",
        document.cookie.replace(
          /(?:(?:^|.*;\s*)captchaValue\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        )
      );
      focusAndFill("[name=addresseeFirstName]", "Edsger");
      focusAndFill("[name=addresseeLastName]", "Dijkstra");
      focusAndFill("[name=addressLine1", "1");
      focusAndFill("[name=addressLine3", "Cricket Lane");
      focusAndFill("[name=town", "Houston");
      focusAndFill("[name=county", "TX");
      focusAndFill("[name=postcode", "1234 AB");
      focusAndFill("[name=expiry", selectedCard.expiry);
    },
    dk: (selectedCard) => {
      const $ = document.querySelector.bind(document);

      const focusAndFill = (selector, value) => {
        const el = $(selector);
        if (!el) return;
        el.value = value;
        ["input", "click", "change", "blur"].forEach((event) => {
          const changeEvent = new Event(event, {
            bubbles: true,
            cancelable: true,
          });
          el.dispatchEvent(changeEvent);
        });
      };

      focusAndFill("[name=title]", "Mr");
      focusAndFill("[name=firstName]", "Peter");
      focusAndFill("[name=lastName]", "Schmeichel");
      focusAndFill("[name=mobile]", "+07777777777");
      const uniqueEmail = "a" + new Date().getTime() + "@testmail.com";
      focusAndFill("[name=email]", uniqueEmail);
      focusAndFill("[name=confirmEmail]", uniqueEmail);
      focusAndFill("[name=password]", "showtime123");
      focusAndFill("[name=confirmPassword]", "showtime123");
      $("[name=terms]") &&
        ($("[name=terms]").focus(), ($("[name=terms]").checked = !0));
      focusAndFill(
        "[name=captcha]",
        document.cookie.replace(
          /(?:(?:^|.*;\s*)captchaValue\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        )
      );
      focusAndFill("[name=addresseeFirstName]", "Peter");
      focusAndFill("[name=addresseeLastName]", "Schmeichel");
      focusAndFill("[name=addressLine1", "1");
      focusAndFill("[name=addressLine3", "Cricket Lane");
      focusAndFill("[name=town", "Houston");
      focusAndFill("[name=county", "TX");
      focusAndFill("[name=postcode", "0000");
      focusAndFill("[name=expiry", selectedCard.expiry);
    },
    se: (selectedCard) => {
      const $ = document.querySelector.bind(document);

      const focusAndFill = (selector, value) => {
        const el = $(selector);
        if (!el) return;
        el.value = value;
        ["input", "click", "change", "blur"].forEach((event) => {
          const changeEvent = new Event(event, {
            bubbles: true,
            cancelable: true,
          });
          el.dispatchEvent(changeEvent);
        });
      };

      focusAndFill("[name=title]", "Miss");
      focusAndFill("[name=firstName]", "Greta");
      focusAndFill("[name=lastName]", "Thunberg");
      focusAndFill("[name=mobile]", "+07777777777");
      const uniqueEmail = "a" + new Date().getTime() + "@testmail.com";
      focusAndFill("[name=email]", uniqueEmail);
      focusAndFill("[name=confirmEmail]", uniqueEmail);
      focusAndFill("[name=password]", "showtime123");
      focusAndFill("[name=confirmPassword]", "showtime123");
      $("[name=terms]") &&
        ($("[name=terms]").focus(), ($("[name=terms]").checked = !0));
      focusAndFill(
        "[name=captcha]",
        document.cookie.replace(
          /(?:(?:^|.*;\s*)captchaValue\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        )
      );
      focusAndFill("[name=addresseeFirstName]", "Greta");
      focusAndFill("[name=addresseeLastName]", "Thunberg");
      focusAndFill("[name=addressLine1", "1");
      focusAndFill("[name=addressLine3", "Cricket Lane");
      focusAndFill("[name=town", "Houston");
      focusAndFill("[name=county", "TX");
      focusAndFill("[name=postcode", "000 00");
      focusAndFill("[name=expiry", selectedCard.expiry);
    },
    fi: (selectedCard) => {
      const $ = document.querySelector.bind(document);

      const focusAndFill = (selector, value) => {
        const el = $(selector);
        if (!el) return;
        el.value = value;
        ["input", "click", "change", "blur"].forEach((event) => {
          const changeEvent = new Event(event, {
            bubbles: true,
            cancelable: true,
          });
          el.dispatchEvent(changeEvent);
        });
      };

      focusAndFill("[name=title]", "Mr");
      focusAndFill("[name=firstName]", "Kimi");
      focusAndFill("[name=lastName]", "Raikkonen");
      focusAndFill("[name=mobile]", "+07777777777");
      const uniqueEmail = "a" + new Date().getTime() + "@testmail.com";
      focusAndFill("[name=email]", uniqueEmail);
      focusAndFill("[name=confirmEmail]", uniqueEmail);
      focusAndFill("[name=password]", "showtime123");
      focusAndFill("[name=confirmPassword]", "showtime123");
      $("[name=terms]") &&
        ($("[name=terms]").focus(), ($("[name=terms]").checked = !0));
      focusAndFill(
        "[name=captcha]",
        document.cookie.replace(
          /(?:(?:^|.*;\s*)captchaValue\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        )
      );
      focusAndFill("[name=addresseeFirstName]", "Kimi");
      focusAndFill("[name=addresseeLastName]", "Raikkonen");
      focusAndFill("[name=addressLine1", "1");
      focusAndFill("[name=addressLine3", "Cricket Lane");
      focusAndFill("[name=town", "Houston");
      focusAndFill("[name=county", "TX");
      focusAndFill("[name=postcode", "0000");
      focusAndFill("[name=expiry", selectedCard.expiry);
    },
  },
};
