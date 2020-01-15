---
title: "Robust Nonconvex Trajectory Optimization Through Iterative ADMM"
excerpt: "Older project (currently under completion) with Prof. Scott Kuindersma of the Harvard Agile Robotics Laboratory. <br/><img src='/images/scott_lab.png' style='height:300px;'>"
collection: portfolio
---

*This project was done under the guidance of Prof. Scott Kuindersma at the [Agile Robotics Laboratory](https://agile.seas.harvard.edu/) at Harvard, and is undergoing final changes before submission.*

Trajectory optimization problems for robotic systems tend to have common components: satisfying dynamics along the trajectory, common cost functions on states and inputs, and additional constraints such as obstacle avoidance. However, most studies in robotics do not take advantage of these problem characteristics, and use either use solvers specialized for a particular system, or general-purpose toolboxes for nonlinear optimization.
In this work, we propose a framework for dynamic trajectory planning based on consensus ADMM with quadratic penalties on violation of linearized constraints. We demonstrate the solver on planning problems for quadrotor, Kuka Arm, and RoboBee systems with additional nonconvex constraints, and compare its performance against SNOPT and IPOPT.  
