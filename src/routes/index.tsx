import {$, component$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {getSignedImageUrl} from "~/server/image.server";
import {Subject} from "~/server/types";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <button
        onclick$={$(async () => {
            console.log(`Hello from Qwik!`)
            const resp = await getSignedImageUrl(Subject.Component, '2');
            // works locally
            console.log(`Response: `, {resp})
        })}
      >
        Click me
      </button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
