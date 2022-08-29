---
title: "Source Separation with an Acoustic Vector Sensor for Terrestrial Bioacoustics"
excerpt: "Research project in collaboration with the K. Lisa Yang Center for Conservation Bioacoustics."
image: "/images/source_separation.png"
collection: portfolio
category: "signal analysis"
---

*This work is published in JASA and can be accessed [here](https://doi.org/10.1121/10.0013505).*

![](/images/source_separation_figure2.png)

Passive acoustic monitoring is emerging as a low-cost, non-invasive methodology for automated species-level population surveys. However, systems for automating the detection and classification of vocalizations in complex soundscapes are significantly hindered by overlap of calls and environmental noise. We propose addressing this challenge by utilizing an acoustic vector sensor to separate contributions from different sound sources. More specifically, we describe and implement an analytical pipeline consisting of (1) calculating direction-of-arrival, (2) decomposing the azimuth estimates into angular distributions for individual sources, and (3) numerically reconstructing source signals. Using both simulation and experimental recordings, we evaluate the accuracy of direction-of-arrival estimation through the active intensity method (AIM), against the baselines of white noise gain constraint beamforming (WNC) and multiple signal classification (MUSIC). Additionally, we demonstrate and compare source signal reconstruction with simple angular thresholding and a wrapped Gaussian mixture model. Overall, we show that AIM achieves higher performance than WNC and MUSIC, with a mean angular error of about 5 degrees, robustness to environmental noise, flexible representation of multiple sources, and high fidelity in source signal reconstructions. 
