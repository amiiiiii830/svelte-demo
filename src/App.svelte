<script>
  let isChecked = false;

  function toggle() {
    isChecked = !isChecked;
  }
</script>

<div id="root">
  <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
  <button
    type="button"
    class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
    role="switch"
    aria-checked={isChecked}
    on:click={toggle}
    class:bg-gray-200={!isChecked}
    class:bg-indigo-600={isChecked}
  >
    <span class="sr-only">Use setting</span>
    
    <!-- Enabled: "translate-x-[20px]", Not Enabled: "translate-x-[0px]" -->
    <span
      aria-hidden="true"
      class="
        pointer-events-none 
        inline-block 
        h-[20px] 
        w-[20px] 
        transform rounded-full bg-white shadow ring-[0px] transition duration-[200ms] ease-in-out
      "
      class:translate-x-[0]={!isChecked}
      class:translate-x-[20px]={isChecked}
      
     ></span>
   </button>
 </div>

<style>
/* Add any additional styles here */
</style>