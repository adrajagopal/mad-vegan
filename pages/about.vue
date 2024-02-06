<script setup></script>

<template>
	<inner-column>
	<article>

		<h1 class="xxl-voice">Madison has tons of options for vegan food.</h1>

		<h2 class="xl-voice">Mad Vegan is your guide.</h2>

		<p>This story starts, unfortunately, on Reddit -- in the r/madisonwi sub. There was a thread asking about vegetarian options in town. I commented, explaining that, while I love Tex Tubb's, I've found chunks of beef in my meals multiple times. I got downvoted, because it's Reddit.</p>

		<p>That wasn't necessarily the origin story for this site, but it still really irks me. What can I say? I can be petty 🤷🏽‍♂️</p>

		<p>Anyway, I think the Madison vegan community needs a better resource -- a data-driven one -- to help find good vegan restaurants.</p>

		<h3 class="large-voice">Is this just Yelp for ecoterrorists?</h3>

		<p>No. There are plenty of Yelp reviews for vegan restaurants and dishes in Madison, but what I want to provide is a data-driven look at restaurants.</p>

		<p>Here are some of the metrics I want people to have access to:</p>

		<ul role="list" class="bulleted-list">
			<li>Is the whole restaurant vegan, or do they just have vegan options?</li>
			<li>Does it have a separate vegan menu?</li>
			<li>Do they make accommodations or substitutions?</li>
			<li>Do they upcharge for vegan ingredients?</li>
			<li>Have people experienced issues like getting sick, cross-contamination, non-vegetarian ingredients being used without disclosure?</li>
		</ul>

		<h3 class="large-voice">Why go all the way vegan?</h3>

		<p>Pretty much every restaurant has solid vegetarian options. Especially here in Dairyland, people are content to throw cheese on just about anything and call it an entree.</p>

		<p>Given the (hot take incoming) entire state's approach to meatless food -- throw some cheese on it -- I think vegans need some help.</p>

		<p>Also, you won't find "plant-based" anywhere on this site if I can help it. The term is not used consistently, so I'm going to stick to vegan. I've seen food companies use "plant-based" to describe a dish that uses mostly vegan ingredients, but also has meat or dairy in it. That's cool, but not helpful for vegans.</p>

		<h3 class="large-voice">OK, so what's your definition of vegan food?</h3>

		<p>Vegan food contains no ingredients derived from animals.</p>

		<p>Here are some things you might not think about if you're trying to eat vegan or even vegetarian:</p>
		<ul role="list" class="bulleted-list">
			<li>Caesar dressing and Worcestershire sauce usually includes anchovies</li>
			<li>Fish sauce is used in east/southeast Asian foods. Madison has a bunch of Thai restaurants, all of which handle it slightly differently. Some, like Ha Long Bay, don't use fish sauce in any vegetarian dish, while others, like Thai Basil, literally put this disclaimer at the bottom of their Vegetarian menu:
				<blockquote>"Sorry, we cannot modify our sauce base which contains oyster sauce and curry paste base which contain shrimp paste. It will make a taste change from the original recipe."</blockquote>
			</li>
			<li>Many cheese are made with animal rennet, including parmesan, pecorino romano, and other hard cheeses</li>
			<li>Starburst and many gummy candies uses animal gelatin to get their chewy texture</li>
			<li>Bone char is commonly used to refine sugar, though this is extremely hard to avoid</li>
		</ul>

		<h3 class="large-voice">Ready to find your next meal?</h3>

		<button>
			<NuxtLink to="/" class="medium-voice">Get Started</NuxtLink>
		</button>

	</article>
	</inner-column>
</template>
	
<style scoped>
	article {
		margin-bottom: 150px;

		& button {
			margin-top: 1rem;
			& a {
				color: var(--paper);
				text-decoration: none;
			}
		}
	}


</style>
