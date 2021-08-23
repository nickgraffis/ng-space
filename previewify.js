const nodeHtmlToImage = require('node-html-to-image')
// const { slugify } = require('./src/logics');

const template = ({ description, title}) =>  `
<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
    .bg {
      font-family: 'Inter', sans-serif;
      width: 100%;
      height: 100%;
      background-color: #F1F5F9;
      background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2330353c' fill-opacity='0.09'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    .border-t-8 {
      border-top: 8px solid #FD813E;
    }
    .p-12 {
      padding: 3rem;
    }
    .mb-12 {
      margin-bottom: 3rem;
      color: #FD813E;
    }
    .font-extrabold {
      font-weight: 800;
    }
    .uppercase {
      text-transform: uppercase;
    }
    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    .text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 500;
    }
    .text-5xl {
      font-size: 3rem;
      line-height: 1;
    }
    .my-4 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .text-gray-700 {
      color: #374151;
    }
    .text-gray-500 {
      color: #6B7280;
    }
    </style>
  </head>
  <div class="bg">
    <div class="border-t-8"></div>
    <div class="p-12">
      <p class="uppercase font-extrabold text-lg mb-12">Nickgraffis.me</p>
      <div class="">
        <p class="font-extrabold text-5xl text-gray-700 my-4">${title}</p>
        <p class="text-xl text-gray-500 my-4">${description}
        </p>
      </div>
    </div>
  </div>
</html>
`

export const generate = (title, description, slug) => nodeHtmlToImage({
  output: `./src/assets/previews/${slug}.png`,
  html: template({
    description,
    title
  })
})

export const test = () => console.log('test')