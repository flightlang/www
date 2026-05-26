---
layout: post
title: "Why Drone Missions Need Domain-Specific Languages"
description: "A short introduction to why UAV mission planning benefits from explicit state machines, unit-aware syntax, and portable mission specifications."
---

Drone missions are often described through scripts, configuration files, or platform-specific workflows. That approach can work for small experiments, but it becomes harder to reason about as missions become longer, more conditional, and more safety-sensitive.

FlightLang starts from a different premise: a drone mission should be readable as a mission specification before it becomes executable code.

## Mission logic should be explicit

A UAV mission is not only a sequence of commands. It is a set of states, transitions, constraints, and responses to events. When those pieces are hidden inside general-purpose code, the operator has to infer the mission structure from implementation details.

A domain-specific language can make the structure visible. States such as `Idle`, `Takeoff`, `Transit`, `Avoid`, and `RTL` become first-class parts of the mission. Transitions are written directly. Preconditions, geofences, deadlines, and fallback behaviour can be placed where they belong.

## Units should be part of the language

Drone missions depend on physical quantities. Altitude, speed, distance, angle, and time are not interchangeable values.

FlightLang uses unit-aware values such as `60 m`, `12 mps`, `90 deg`, and `50 ms` so that basic mistakes can be caught earlier. This does not replace full verification or flight testing, but it moves a common class of errors closer to the authoring stage.

## Portability needs a stable mission layer

Drone ecosystems change. Simulation environments, controller stacks, and deployment targets may differ from one project to another. A mission definition should not have to be rewritten every time the execution backend changes.

That is why FlightLang is designed around a stable mission layer with multiple backend targets. A mission can be parsed, checked, and then generated into Python for simulation or Rust for controller-oriented development.

## Safety comes from layers

FlightLang is not a substitute for real-world testing, platform integration, or certification. It is an authoring and compilation layer that can make mission intent easier to inspect and reason about.

The long-term goal is to support stronger static analysis, safer state transitions, formalized timing constraints, and clearer integration points for PX4, ROS 2, and related UAV systems.

A good mission language should not hide complexity. It should organize it.
