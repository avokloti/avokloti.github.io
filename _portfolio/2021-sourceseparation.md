---
title: "Source Separation for Terrestrial Bio-Acoustics"
excerpt: "Research project at the Soft Math Lab, in collaboration with the K. Lisa Yang Center for Conservation Bioacoustics."
image: "/images/source_separation.png"
collection: portfolio
category: "signal analysis"
---

*This research is done in collaboration with Prof. Holger Klinck of the K. Lisa Yang Center for Conservation Bioacoustics at the Cornell Lab of Ornithology. This work is currently under review.*

Passive acoustic monitoring is emerging as a relatively low-cost, non-invasive methodology for automated species-level population surveys. However, systems for automating detection and classification of vocalizations in complex soundscapes are significantly hindered by overlap of calls and environmental noise. We propose addressing this challenge by utilizing an acoustic vector-sensor to separate contributions from different sound sources. More specifically, we describe and implement an analytical pipeline consisting of (1) calculating direction-of-arrival azimuth probability estimates, (2) fitting a wrapped Gaussian mixture model to these distributions, and (3) numerically reconstructing source signals. For azimuth estimation, we compare the performance of several algorithms: Multiple Signal Classification (MUSIC) and standard and weighted Complex Acoustic Intensity Measurement (CAIM/WCAIM). We find that WCAIM achieves best performance, with mean angular error of about 4 degrees, robustness across source SNR and source duration, and flexible representation of multiple sources. Finally, we show high fidelity in source signal reconstructions of birdsong playback experiments. 
