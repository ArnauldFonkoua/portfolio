// This declaration file tells TypeScript how to treat all imported modules
// ending with the .vue extension, preventing the 'implicitly has an any type' error.

declare module '*.vue' {
  // Imports the 'DefineComponent' type from the 'vue' library for type checking.
  import type { DefineComponent } from 'vue'

  // Defines the component's type structure.
  // This tells TypeScript that anything imported from a '*.vue' file
  // is a Vue component, which satisfies the compiler.
  const component: DefineComponent<{}, {}, any>
  export default component
}
