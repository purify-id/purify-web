<template>
  <figure>
    <figcaption
      v-if="title"
      class="text-sm text-center font-mono py-1 text-green-600 rounded-t md:rounded-tl"
      style="background-color:#162B29"
    >
      {{ title }}
    </figcaption>
    <div
      class="text-yellow-700 text-opacity-50 p-4 text-sm md:py-8 md:px-24"
      style="background-color:#0D1A19"
    >
      <pre><code class="prism">{{ code() }}</code></pre>
    </div>
  </figure>
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    title: { type: String, default: "" },
  },
  methods: {
    code() {
      return `
// Check for wasm support.
    if (!('WebAssembly' in window)) {
      alert('you need a browser with wasm support enabled :(');
    }

    // Loads a WebAssembly dynamic library, returns a promise.
    // imports is an optional imports object
    function loadWebAssembly(filename, imports) {
      // Fetch the file and compile it
      return fetch(filename)
        .then(response => response.arrayBuffer())
        .then(buffer => WebAssembly.compile(buffer))
        .then(module => {
          // Create the imports for the module, including the
          // standard dynamic library imports
          imports = imports || {};
          imports.env = imports.env || {};
          imports.env.memoryBase = imports.env.memoryBase || 0;
          imports.env.tableBase = imports.env.tableBase || 0;
          if (!imports.env.memory) {
            imports.env.memory = new WebAssembly.Memory({ initial: 256 });
          }
          if (!imports.env.table) {
            imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });
          }
          // Create the instance.
          return new WebAssembly.Instance(module, imports);
        });
    }

    // Main part of this example, loads the module and uses it.
    loadWebAssembly('hello_world.wasm')
      .then(instance => {
        var exports = instance.exports; // the exports of that instance
        var doubler = exports._doubler; // the "doubler" function (note "_" prefix)
        // now we are ready, set up the button so the user can run the code
        var button = document.getElementById('run');
        button.value = 'Call a method in the WebAssembly module';
        button.addEventListener('click', function() {
          var input = 21;
          alert(input + ' doubled is ' + doubler(input));
        }, false);
      }
    );
`;
    },
  },
};
</script>
