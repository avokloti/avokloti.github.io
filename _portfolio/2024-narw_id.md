---
title: "Identifying Individual Right Whales through Passive Acoustic Upcall Recordings"
image: "/images/narw_id_upcalls.png"
collection: portfolio
category: ""
---

*This project was presented at the North Atlantic Right Whale Consortium (NARWC) 2024 [slides]().*

![](/images/narw_id_upcalls.png)

The capability to distinguish individual North Atlantic right whales (Eubalaena glacialis) through the characteristics of their vocalizations would enable streamlined acoustic abundance estimation. While prior studies of manually-derived features in animal-borne tag recordings have demonstrated that individual identity is indeed encoded within upcall structure, this task has not yet been approached with automated machine learning techniques. There are multiple key challenges to this task. For a start, it is difficult to construct a dataset to validate individual upcall identification; next, even when manually distinguishing distinct callers in passive acoustic recordings is possible, the resulting sample sizes are typically too small for training modern neural networks; finally, ambient noise often becomes a driving factor in the features learned by a neural network. In this work, we address each of these challenges to develop a robust workflow for deep-learning-based individual identification of right whale upcalls. First, we address dataset size limitations by leveraging transfer learning of the BirdNET network, which has been successfully applied for classification tasks across diverse taxonomic groups. Specifically, we calculate BirdNET embedding vectors for all upcall samples and use a simple classifier to distinguish groups in the resulting lower-dimensional feature space. To account for biases introduced by noise, we implement rigorous de-noising and perform parallel analysis of a dataset of ambient noise samples to serve as a “control”. Finally, to validate the approach, we analyze both focal recordings of tagged right whales as well as passive acoustic recordings in which individuals were distinguished by concurrent vocalization in different locations. Overall, we demonstrate high-performance automated classification of individual identity through upcall vocalizations, and discuss methodological limitations and outlooks for acoustic abundance estimation. 

I gave a ten-minute presentation on this project at NARWC 2024 meeting.



