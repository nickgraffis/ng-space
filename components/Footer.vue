<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <footer class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
    <nav class="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
      <div class="px-5 py-2">
        <a class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200" href="/about">About</a>
      </div><div class="px-5 py-2">
        <a class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200" href="/blog">Work</a>
      </div>
      <div class="px-5 py-2">
        <a class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200" href="/dashboard">Blog</a>
      </div>
      <div class="px-5 py-2">
        <a class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200" href="/history">Resume</a>
      </div>
      <div class="px-5 py-2">
        <a class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200" href="/products">Timeline</a>
      </div>
      <div class="px-5 py-2">
        <a class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200" href="/social">Admin</a>
      </div>
    </nav>
    <div class="flex justify-center mt-8 space-x-6">
      <a href="https://instagram.com/shunkakinoki" class="text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">Dribbble</span>
        <svg viewBox="0 0 1000 1000" focusable="false" class="w-6 h-6" aria-hidden="true"><path fill="currentColor" d="M0 500c0-90.667 22.334-174.333 67-251 44.667-76.667 105.334-137.333 182-182C325.667 22.333 409.334 0 500 0c90.667 0 174.334 22.333 251 67 76.667 44.667 137.334 105.333 182 182 44.667 76.667 67 160.333 67 251s-22.333 174.333-67 251c-44.666 76.667-105.333 137.333-182 182-76.666 44.667-160.333 67-251 67-90.666 0-174.333-22.333-251-67-76.666-44.667-137.333-105.333-182-182C22.334 674.333 0 590.667 0 500zm83 0c0 104 35 195.667 105 275 32-62.667 82.667-122.333 152-179 69.334-56.667 137-92.333 203-107-10-23.333-19.666-44.333-29-63-114.666 36.667-238.666 55-372 55-26 0-45.333-.333-58-1 0 2.667-.166 6-.5 10-.333 4-.5 7.333-.5 10zm13-103c14.667 1.333 36.334 2 65 2 111.334 0 217-15 317-45-50.666-90-106.333-165-167-225-52.666 26.667-97.833 63.667-135.5 111-37.666 47.333-64.166 99.667-79.5 157zm149 432c75.334 58.667 160.334 88 255 88 49.334 0 98.334-9.333 147-28-13.333-114-39.333-224.333-78-331-61.333 13.333-123.166 47-185.5 101C321.167 713 275 769.667 245 829zM398 97c58.667 60.667 113 136.333 163 227 90.667-38 159-86.333 205-145-77.333-64-166-96-266-96-34 0-68 4.667-102 14zm199 298c10 21.333 21.334 48.333 34 81 49.334-4.667 103-7 161-7 41.334 0 82.334 1 123 3-5.333-90.667-38-171.333-98-242-43.333 64.667-116.666 119.667-220 165zm59 151c34 98.667 57 200 69 304 52.667-34 95.667-77.667 129-131 33.334-53.333 53.334-111 60-173-48.666-3.333-93-5-133-5-36.666 0-78.333 1.667-125 5z"></path></svg>
      </a>
      <a href="https://instagram.com/shunkakinoki" class="text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">Instagram</span>
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
        </svg>
      </a>
      <a href="https://instagram.com/shunkakinoki" class="text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">CodePen</span>
        <svg viewBox="0 0 512 512" focusable="false" class="w-6 h-6" aria-hidden="true"><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg>
      </a>
      <a href="https://linkedin.com/in/shunkakinoki" class="text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">Linkedin</span>
        <svg viewBox="0 0 24 24" focusable="false" class="w-6 h-6" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></g></svg>
      </a>
      <a href="https://github.com/shunkakinoki" class="text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">GitHub</span>
        <svg viewBox="0 0 24 24" focusable="false" class="w-6 h-6" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></g></svg>
      </a>
      <a href="https://twitter.com/shunkakinoki" class="text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">Twitter</span>
        <svg viewBox="0 0 24 24" focusable="false" class="w-6 h-6" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></g></svg>
      </a>
    </div>
    <div class="flex flex-col items-center justify-center max-w-3xl pt-8 mx-auto space-x-6 space-y-6 sm:flex-row sm:space-y-0">
      <p class="flex-shrink-0 text-base text-center dark:text-cullen">
        © Nick Graffis. All rights reserved.
      </p>
      <a class="flex items-center justify-center p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 dark:focus:ring-pink-400" href="/credits">
        <svg class="w-6 h-6 text-pink-700 fill-current dark:text-cullen hover:text-pink-900 dark:hover:text-buffy" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
        </svg>
      </a>
      <div class="sm:flex-grow-0">
        <form>
          <fieldset class="w-full">
            <label for="mode" class="sr-only">Mode</label>
            <div class="relative">
              <select id="mode" class="block w-full py-2 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 appearance-none rounded-md bg-none focus:outline-none sm:text-sm dark:bg-nosferatu dark:text-cullen dark:border-cullen">
                <option value="en">
                  English
                </option>
                <option value="sv">
                  Svenska
                </option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600 pointer-events-none dark:text-cullen">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </footer>
</template>
