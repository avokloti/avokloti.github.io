---
title: "Graduate Research: Trajectory Optimization for Robotics"
excerpt: "In this project (currently under completion), I wrote a general-purpose solver for trajectory optimization which took advantage of the consistent structure of problems within robotics to improve speed and robustness. <br/><img src='/images/robobee_traj.pdf'>"
collection: portfolio
---

Trajectory optimization problems for robotic systems tend to have common components: satisfying dynamics along the trajectory, common cost functions on states and inputs, and additional constraints such as obstacle avoidance. However, most studies in robotics do not take advantage of these problem characteristics, and use either use solvers specialized for a particular system, or general-purpose toolboxes for nonlinear optimization.
In this work, we propose a framework for dynamic trajectory planning based on consensus ADMM with quadratic penalties on violation of linearized constraints. We demonstrate the solver on planning problems for quadrotor, Kuka Arm, and RoboBee systems with additional nonconvex constraints, and compare its performance against SNOPT and IPOPT.  

This project was done under the guidance of Prof. Scott Kuindersma at the [Agile Robotics Laboratory](https://agile.seas.harvard.edu/) at Harvard, and is undergoing final changes before submission.
