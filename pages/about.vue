<script setup></script>

<template>
	<inner-column>
	<article>

		<h1 class="xxl-voice">Madison has plenty of vegan food.</h1>

		<section>
			<h2 class="xl-voice">Mad Vegan is your guide.</h2>
			
			<p>Eating out when you have dietary <span style="text-decoration:line-through;">restrictions</span> needs is a mess.</p>
			
			<p>As a gluten-free almost-vegan (I eat honey and certified humane eggs -- who knows if "certified humane" actually means anything, though) I've figured out a decent bit about eating out safely. But there are so many nuances to think about beyond a "vegan" tag or some reviews on Google or Yelp</p>
			
			<p>Vegans everywhere need a better resource -- a data-driven one -- to help find good vegan restaurants.</p>
		</section>

		<section>
			<h2 class="xl-voice">About Mad Vegan</h2>
			<h3 class="large-voice">Is this just Yelp for ecoterrorists?</h3>
			
			<p>No. There are plenty of Yelp reviews for vegan restaurants and dishes in Madison, but what I want to provide is a curated, data-driven look at restaurants.</p>
			
			<p>Here are some of the metrics I want people to have access to:</p>
			
			<ul role="list" class="bulleted-list">
				<li>Is the whole restaurant vegan, or do they just have vegan options?</li>
				<li>Does it have a separate vegan menu?</li>
				<li>Do they make accommodations or substitutions?</li>
				<li>Do they upcharge for vegan ingredients?</li>
				<li>Do they fry everything in the same fryer, or do they fry vegetarian/vegan food separately?</li>
				<li>Have people experienced issues like getting sick, cross-contamination, non-vegetarian ingredients being used without disclosure?</li>
			</ul>
		</section>

		<section>
			<h3 class="large-voice">Why go all the way vegan?</h3>
			
			<p>Pretty much every restaurant has solid vegetarian options. Especially here in Dairyland (hot take incoming), people are content to throw cheese on potatoes or an impossible burger and call it vegetarian entrée.</p>
			
			<p>Given the entire state's approach to meatless food, I think vegans need some help.</p>
			
			<p>Also, you won't find "plant-based" anywhere on this site if I can help it. The term is not used consistently, so I'm going to stick to vegan. I've seen food companies use "plant-based" to describe a dish that uses mostly vegan ingredients, but also has meat or dairy in it. That's fine, but not helpful for vegans.</p>
		</section>

		<section>
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
		</section>

		<section>
			<h2 class="large-voice">Ready to find your next meal?</h2>
			
			<Button
				copy="Find a restaurant -->"
				:isLink="true"
				linkHref="/"
				class="fill paper"
			/>
		</section>

		<section>
			<p>If you have any feedback, you can <NuxtLink to="mailto:adrajagopal@gmail.com">email me</NuxtLink> or find me on <NuxtLink to="https://linkedin.com/in/adrajagopal" target="_blank">LinkedIn</NuxtLink>.</p>
			<p>Thanks for visiting ❤️</p>
			<p style="margin-top:0;">-Ad</p>
		</section>

	</article>
	</inner-column>
</template>
	
<style scoped>
	article {
		margin-bottom: 150px;
		display: grid;
		gap: 30px;
	}

	a.button {
		margin-top: 20px;
		width: 200px;
	}

	section:last-of-type {
		margin-top: 50px;
	}
</style>
