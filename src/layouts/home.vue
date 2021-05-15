<template>
  <main className="min-h-screen h-full w-screen bg-cullen text-nosferatu dark:text-cullen dark:bg-nosferatu">
    <Header />
    <div className="flex flex-col mx-auto items-center max-w-2xl min-h-screen px-8 md:px-0 lg:px-0">
      <router-view />
      <Footer />
    </div>
  </main>
</template>
