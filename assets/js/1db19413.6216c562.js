"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[91960],{160227:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=i(474848),A=i(28453);const t={sidebar_position:4890,slug:"2022-12-19",title:"Tensorflow Representation Learning",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Build a Denoising Autoencoder in Tensorflow using the mnist Digits Dataset"},a=void 0,s={id:"IoT-and-Machine-Learning/ML/2022-12-20-tf-representation/index",title:"Tensorflow Representation Learning",description:"Build a Denoising Autoencoder in Tensorflow using the mnist Digits Dataset",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-12-20-tf-representation/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-12-20-tf-representation",slug:"/IoT-and-Machine-Learning/ML/2022-12-20-tf-representation/2022-12-19",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-20-tf-representation/2022-12-19",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-12-20-tf-representation/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4890,frontMatter:{sidebar_position:4890,slug:"2022-12-19",title:"Tensorflow Representation Learning",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Build a Denoising Autoencoder in Tensorflow using the mnist Digits Dataset"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Deep Dream",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-21-tf-deepdream/2022-12-21"},next:{title:"Tensorflow Hub",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-19-tf-hub/2022-12-19"}},r={},d=[{value:"Denoising Autoencoder",id:"denoising-autoencoder",level:2},{value:"Inspecting the Dataset",id:"inspecting-the-dataset",level:3},{value:"Adding Noise",id:"adding-noise",level:3},{value:"Build the Autoencoder",id:"build-the-autoencoder",level:3},{value:"Train the Autoencoder",id:"train-the-autoencoder",level:3},{value:"Evaluate the Model",id:"evaluate-the-model",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,A.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Guangzhou, China",src:i(877201).A+"",width:"1500",height:"383"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#denoising-autoencoder",children:"Denoising Autoencoder"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#inspecting-the-dataset",children:"Inspecting the Dataset"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#adding-noise",children:"Adding Noise"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#build-the-autoencoder",children:"Build the Autoencoder"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#train-the-autoencoder",children:"Train the Autoencoder"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#evaluate-the-model",children:"Evaluate the Model"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-mnist-digits",children:"Github"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Auto encoders are a type of ",(0,o.jsx)(n.strong,{children:"Artificial Neural Networks"})," (",(0,o.jsx)(n.em,{children:"ANN"}),") that are used to perform data encoding (",(0,o.jsx)(n.strong,{children:"Representation Learning"}),"). Auto encoder use the same data for input data and output data:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Feed Forward ANN"})," (",(0,o.jsx)(n.em,{children:"Supervised Learning"}),"):","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"Cat Image"})," ",(0,o.jsx)(n.code,{children:"=>"})," ",(0,o.jsx)(n.strong,{children:"ANN"})," ",(0,o.jsx)(n.code,{children:"<="})," ",(0,o.jsx)(n.em,{children:"True Label (Cat)"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Auto Encoder ANN"})," (",(0,o.jsx)(n.em,{children:"Unsupervised Learning"}),"):","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"Cat Image"})," ",(0,o.jsx)(n.code,{children:"=>"})," ",(0,o.jsx)(n.strong,{children:"Encoder ANN"}),"/",(0,o.jsx)(n.strong,{children:"Decoder ANN"})," ",(0,o.jsx)(n.code,{children:"=>"})," ",(0,o.jsx)(n.strong,{children:"Reconstructed Cat Image"})," ",(0,o.jsx)(n.code,{children:"=>"})," ",(0,o.jsx)(n.code,{children:"<="})," ",(0,o.jsx)(n.em,{children:"Cat Image"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The encoding side of this network generates a representation of the input image (",(0,o.jsx)(n.em,{children:"dimensionality reduction"}),"). The decoding side then takes the encoded image and tries to reconstruct the input image from it. The performance metric for an Auto Encoder is the similarity between the input and output image."]}),"\n",(0,o.jsx)(n.h2,{id:"denoising-autoencoder",children:"Denoising Autoencoder"}),"\n",(0,o.jsx)(n.p,{children:'A common use-case for autoencoders is the removal of noise from data, e.g. compression artifacts in low resolution images. This is done by feeding the autoencoder the compressed image and comparing the reconstructed output image to the original, non-compressed image. This training will give us a model that allows us to remove compression artifacts from similarly "mis-treated" images.'}),"\n",(0,o.jsx)(n.h3,{id:"inspecting-the-dataset",children:"Inspecting the Dataset"}),"\n",(0,o.jsx)(n.p,{children:"Start by loading the mnist digits dataset - which is provided by Keras:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# download mnist dataset\nfrom tensorflow.keras.datasets import mnist\n(X_train, y_train),(X_test, y_test) = mnist.load_data()\n"})}),"\n",(0,o.jsx)(n.p,{children:"We can inspect a random set of 225 images and their labels from the set using matplotlib:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# inspect a larger set of images\n## create a 15x15 grid\nW_grid = 15\nL_grid = 15\nfig, axes = plt.subplots(L_grid, W_grid)\nfig, axes = plt.subplots(L_grid, W_grid, figsize = (17,17))\n## flaten the 15 x 15 matrix into 225 array\naxes = axes.ravel()\n## get the length of the training dataset\nn_training = len(X_train)\n\nfor i in np.arange(0, W_grid * L_grid):\n    # select a random number\n    index = np.random.randint(0, n_training)\n    # read and display an image with the selected index    \n    axes[i].imshow( X_train[index] )\n    axes[i].set_title(y_train[index], fontsize = 8)\n    axes[i].axis('off')\n\nplt.subplots_adjust(hspace=0.4)\nplt.tight_layout()\nplt.show()\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:i(538963).A+"",width:"1638",height:"980"})}),"\n",(0,o.jsx)(n.h3,{id:"adding-noise",children:"Adding Noise"}),"\n",(0,o.jsx)(n.p,{children:'The dataset is clean of noise and can be used as our reference material. To create the "dirty" set of images we can use Numpy to add some random variations:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# create a 28x28 matrix of random number\n# added_noise = np.random.randn(*(28,28))\nnoise_factor = 0.3\nadded_noise = noise_factor * np.random.randn(*(28,28))\n\nplt.imshow(added_noise)\nplt.show()\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:i(964481).A+"",width:"630",height:"475"})}),"\n",(0,o.jsx)(n.p,{children:"We can add noise to an existing image the same way:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'# adding noise to our image\n## how much noise do we need\nnoise_factor = 0.2\n## select an image\nsample_image = X_train[666]\n## and add noise map to it\nnoisy_sample_image = sample_image + noise_factor * np.random.randn(*(28,28))\n\n# previs noisy image\nplt.imshow(noisy_sample_image, cmap="gray")\nplt.show()\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:i(165998).A+"",width:"632",height:"475"})}),"\n",(0,o.jsx)(n.p,{children:'Now we can run a loop over both our training and testing dataset, add the same amount of random noise to each image and store those "dirty" datasets in variables:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# add noise to all images in training dataset\nX_train_noisy = []\nnoise_factor = 0.2\n\nfor sample_image in X_train:\n  sample_image_noisy = sample_image + noise_factor * np.random.randn(*(28,28))\n  sample_image_noisy = np.clip(sample_image_noisy, 0., 1.)\n  X_train_noisy.append(sample_image_noisy)\n\n# convert list to np array\nX_train_noisy = np.array(X_train_noisy)\n\n\n# add noise to all images in testing dataset\nX_test_noisy = []\nnoise_factor = 0.4\n\nfor sample_image in X_test:\n  sample_image_noisy = sample_image + noise_factor * np.random.randn(*(28,28))\n  sample_image_noisy = np.clip(sample_image_noisy, 0., 1.)\n  X_test_noisy.append(sample_image_noisy)\n\n# convert list to np array\nX_test_noisy = np.array(X_test_noisy)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"build-the-autoencoder",children:"Build the Autoencoder"}),"\n",(0,o.jsx)(n.p,{children:'The autoencoder is based on a regular Keras sequential model and consists of the encoder - that is basically the same convolution layer used in regular CNNs with supervised learning - and an decoder - that is an "encoder in reverse". The decoder takes the representation of the image generated by the encoder from the representation layer and has to reconstruct the initial image from this compress data:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'# build autoencoder model\nautoencoder = tf.keras.models.Sequential()\n\n# build the encoder CNN\nautoencoder.add(tf.keras.layers.Conv2D(16, (3,3), strides=1, padding="same", input_shape=(28, 28, 1)))\nautoencoder.add(tf.keras.layers.MaxPooling2D((2,2), padding="same"))\n\nautoencoder.add(tf.keras.layers.Conv2D(8, (3,3), strides=1, padding="same"))\nautoencoder.add(tf.keras.layers.MaxPooling2D((2,2), padding="same"))\n\n# representation layer\nautoencoder.add(tf.keras.layers.Conv2D(8, (3,3), strides=1, padding="same"))\n\n# build the decoder CNN \nautoencoder.add(tf.keras.layers.UpSampling2D((2, 2)))\nautoencoder.add(tf.keras.layers.Conv2DTranspose(8,(3,3), strides=1, padding="same"))\nautoencoder.add(tf.keras.layers.UpSampling2D((2, 2)))\nautoencoder.add(tf.keras.layers.Conv2DTranspose(1, (3,3), strides=1, activation=\'sigmoid\', padding="same"))\n\n\nautoencoder.compile(loss=\'binary_crossentropy\', optimizer=tf.keras.optimizers.Adam(lr=0.001))\nautoencoder.summary()\n'})}),"\n",(0,o.jsx)(n.h3,{id:"train-the-autoencoder",children:"Train the Autoencoder"}),"\n",(0,o.jsx)(n.p,{children:"For the training we now feed the generated noisy dataset into the encoder and have the autencoder compress and reconstruct each image. After those steps we provide to original - noise-free - image to compare the reconstructed image to. The training is complete when we reach a minimum of differences between both of them:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"autoencoder.fit(X_train_noisy.reshape(-1, 28, 28, 1),          \n          X_train.reshape(-1, 28, 28, 1), \n          epochs=10, \n          batch_size=200)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"evaluate-the-model",children:"Evaluate the Model"}),"\n",(0,o.jsx)(n.p,{children:"To get an idea how well our model is performing we can take the first 15 images from the noisy test dataset and compare these source images with the predicted de-noised image:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# test training\n# take 15 images from noisy test set and predict de-noised state\ndenoised_images = autoencoder.predict(X_test_noisy[:15].reshape(-1, 28, 28, 1))\n# plot noisy input vs denoised output\nfig, axes = plt.subplots(nrows=2, ncols=15, figsize=(30,6))\nfor images, row in zip([X_test_noisy[:15], denoised_images], axes):\n    for img, ax in zip(images, row):\n        ax.imshow(img.reshape((28, 28)), cmap='gray')\n\nplt.show()\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Tensorflow Transfer Learning",src:i(865495).A+"",width:"2049",height:"419"})})]})}function c(e={}){const{wrapper:n}={...(0,A.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},538963:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Tensorflow_Transfer_Learning_01-10a1422e089c2fcf1a2f51cb2c12cb37.png"},964481:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Tensorflow_Transfer_Learning_03-0ea0f8701df080b1796b70f18086ad10.png"},165998:(e,n,i)=>{i.d(n,{A:()=>o});const o="data:image/png;base64,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8ODN9Ur/z/38KJ5++mnvg169esXGxg4fPrywsLBTp042DQgL8KPjm0NkZGRAQED9d1GWlJTExMTYONINatWqVVJSUkFBgd2D3BDvKbiVzosxpmPHjpGRkU381EyePHnDhg1ffvll3VKSMTExVVVVpaWldZmmfy5+fhQNpKSkGGOa+LlAoyjam0NQUFDfvn03b97s/WNtbe3mzZsHDhxo71Q3oqysrLCwMDY21u5BbkhiYmJMTEzdeXG73bt27bqpz4sx5uTJk+fOnWuyp8bj8UyePHnNmjVffPFFYmJi3fN9+/YNDAysOxd5eXknTpxosufiakfRwP79+40xTfZcQIjVe24aLVu2nD59enx8vMPhmD59+v79+xcuXBgaGmr3XNfh5ZdfdjgcxpjDhw9PmjTp9OnTCxYsaNGihd1ziZSVlR0+fNjpdL733nspKSkhISFVVVWtWrWqqan505/+1L1796qqqt/97ncXL1585513muzqK1c8ioCAgP/7v/9r2bLlpUuX9u7d+9RTT4WGhv71r39tmkeRmZm5bNmyVatWxcXFlZWVlZWVBQQEBAYGBgcHFxcXv/vuu3369Pnxxx+feeaZ+Pj4mTNn2j3vlV3tKAoLC+fOnRsaGlpVVbV169ZJkyb16tXr1VdftXte3Bi73/aM6/DOO++0b98+KChowIABubm5do9z3caMGRMbGxsUFHTbbbeNGTOmoKDA7omuw5dfftng38748eM9Hk9tbe306dOjo6MdDsfw4cPz8vLsnvRarngUFy9eHDFiRNu2bQMDAxMSEiZOnOh0Ou2e9Kp+/p/YokWLvB/66aefnnvuudatWzdv3vzBBx88deqUrZNey9WO4sSJE0OHDo2IiHA4HJ07d/7973/vcrnsHhY3imXyAABQxGu0AAAoomgBAFBE0QIAoIiiBQBAEUULAIAiihYAAEUULQAAiihaAAAUUbQAACiiaAEAUETRAgCgiKIFAEARRQsAgCKKFgAARRQtAACKKFoAABRRtAAAKKJoAQBQRNECAKCIogUAQBFFCwCAIooWAABFFC0AAIooWgAAFFG0AAAoomgBAFBE0QIAoIiiBQBAEUULAICi/wdmN23tsN+oBQAAAABJRU5ErkJggg=="},865495:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Tensorflow_Transfer_Learning_05-653fd9653d8eaafea733a86a77b2dd60.png"},877201:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-918471126c0472aad97358a725e1a399.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var o=i(296540);const A={},t=o.createContext(A);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);