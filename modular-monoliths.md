### Modular Monoliths
the code structure should reflect the architectural intent

#### Package by Layer
organise code based upon what the code does from a technical perspective ( horizontal slicing )

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/modular-monolith-1.jpg"/>
</p>


#### Package by Feature
organise code based upon what the code does from a functional perspective ( vertical slicing )

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/modular-monolith-2.jpg"/>
</p>


#### Ports and Adapters
keep domain related code separate from technical details ( hexagonal || clean architecture )
- inside is technology agnostic
- outside is technology specific
- outside depends upon the inside

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/modular-monolith-3.jpg"/>
</p>


#### Package by Component
organise code by bundling together everything related to a component
- applying component-based or service-oriented design thinking to a monolithic codebase

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/modular-monolith-4.jpg"/>
</p>

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/modular-monolith-5.jpg"/>
</p>

---

#### Figures

sum of Code Structure

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/modular-monolith-6.jpg"/>
</p>


gray area should not be accessed publicly

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/modular-monolith-7.jpg"/>
</p>

should have a modular monolith code before turning it to a microservice to avoid distributed big ball of mud

<p>
  <img src="https://github.com/dnErf/tap-in/blob/master/images/modular-monolith-8.jpg"/>
</p>

<br />

---

https://www.youtube.com/watch?v=5OjqD-ow8GE

https://c4model.com/