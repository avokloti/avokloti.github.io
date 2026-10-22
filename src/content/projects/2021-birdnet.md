---
title: "Early Exploration of Deep Audio Embeddings"
excerpt: "Class project for CS288: AI for Social Good, spring semester of 2021."
image: "/images/birdnet_figure.jpg"
theme: "terrestrial"
year: 2021
summary: "In the early days of audio embeddings within bioacoustics, we experimented with clustering structure by species and call types across different datasets, comparing embeddings across both pre-trained and custom architectures."
articles: ["tolkova-2021-birdsong"]
---

*This work was done with my classmates Brian Chu and Marcel Hedman as a final project for the graduate course CS288: "AI for Social Good", taught by Prof. Milind Tambe in the spring semester of 2021. Afterwards, we published a short paper and gave an oral presentation on this work at the AI4SG workshop at IJCAI 2021.*

![](/images/birdnet_figure_full.jpg)

Monitoring of bird populations has played a vital role in conservation efforts and in understanding biodiversity loss. The automation of this process has been facilitated by both sensing technologies, such as passive acoustic monitoring, and accompanying analytical tools, such as deep learning. However, machine learning models frequently have difficulty generalizing to examples not encountered in the training data. In our work, we present a semi-supervised approach to identify characteristic calls and environmental noise. We utilize several methods to learn a latent representation of audio samples, including a convolutional autoencoder and two pre-trained networks, and group the resulting embeddings for a domain expert to identify cluster labels. We show that our approach can improve classification precision and provide insight into the latent structure of environmental acoustic datasets.

As the IJCAI workshops do not have published proceedings, our paper can be found on [arXiv](https://arxiv.org/abs/2108.09203).

Additionally, our IJCAI presentation can be found [here](/files/ai4sg-talk-2021.pdf).
