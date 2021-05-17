<template>
  <main className="min-h-screen h-full w-screen bg-cullen text-nosferatu dark:text-cullen dark:bg-nosferatu">
    <div className="flex flex-col mx-auto items-center max-w-2xl h-full px-8 md:px-0 lg:px-0">
      <Header />
      <router-view />
      <Footer />
    </div>
  </main>
</template>
