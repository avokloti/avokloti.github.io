---
title: "Source Separation with an Acoustic Vector-Sensor for Terrestrial Bio-Acoustics"
excerpt: "Research project at the Soft Math Lab, in collaboration with the K. Lisa Yang Center for Conservation Bioacoustics. <br/><img src='/images/great_meadows.png' style='height:300px;'>"
collection: portfolio
---

*This research is done in collaboration with Prof. Holger Klinck of the K. Lisa Yang Center for Conservation Bioacoustics at the Cornell Lab of Ornithology. We plan to submit this project for publication in September 2021.*

Passive acoustic monitoring is emerging as a relatively low-cost, non-invasive methodology for automated species-level population surveys. However, systems for automating detection and classification of vocalizations in complex soundscapes are significantly hindered by overlap of calls and environmental noise. We propose addressing this challenge by utilizing an acoustic vector-sensor to separate individual sound sources. More specifically, we describe and implement an analytical pipeline consisting of (1) calculating azimuth probability estimates, (2) fitting a wrapped Gaussian mixture model to these distributions, and (3) numerically reconstructing source signals. For direction-of-arrival (DOA) estimation, we compare the performance of several algorithms: Multiple Signal Classification (MUSIC) and standard and weighted Complex Acoustic Intensity Measurement (CAIM/WCAIM). We find that WCAIM achieves best performance, with mean angular error of about 4 degrees, and high robustness to source distance and source duration. Finally, we show high fidelity in source signal reconstructions of birdsong playback experiments. 
