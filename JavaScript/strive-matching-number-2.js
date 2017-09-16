/*
Strive was developed with similar intentions to Codewars. It intends to keep developers challenged, honing our skills towards ever-greater pursuits.

With this in mind, Strive asks developers for their skills. This includes all the skills a developer has used in the past, desires to continue to use, and would like to avoid. A candidate has many skills, one may look like this:

{
  name: 'JavaScript',
  experience: 7, // in years 
  preference: 'desired' // could be desired, neutral or avoid
}
On the flip side, the company can create a job with skill requirements. Many companies are just looking for bright developers, so Strive also encourages the use of substitute skills. For example, a company can configure 3 years of JavaScript to substitute for 3 years of CoffeeScript. A job has many skills, one may look like this:

{
  name: 'CoffeeScript',
  idealYears: 3, // in years
  substitutions: [{
    name: 'JavaScript'
  }]
}
A job skill can be satisfied if the candidate's years experience with the skill is greater than or equal to the ideal years. For a valid match, all job skills must be satisfied by the candidate's skills. Additionally, if the candidate desires to use the skill, that skill can recieve a 50% experience boost. However, if the candidate wants to avoid a primary (non-substitute) job skill that a company requires the match is invalid. At that point, there is no need to check for valid substitutions.

Create a method match(candidate, job) that will take a candidate and a job and return a boolean indicating if it is a valid match.
*/

function match(job, candidates) {
 return candidates.filter(c => (job.equityMax === 0 ? !c.desiresEquity : true) && (job.locations.some(loc => c.desiredLocations.includes(loc)) || job.locations.includes(c.currentLocation)));
}
