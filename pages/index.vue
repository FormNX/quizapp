<template>
    <div style="background: url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png');">
        <div class="flex flex-col items-center justify-center mt-2">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Quiz<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> For You</span>
            </h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                ✅ Fun, Easy & Practical Quizzes <br />
                ✅ Test your Practical knowledge <br />
                ❌ <span class="line-through">No Bookish Questions</span>
            </p>
        </div>

        <hr class="w-48 h-0.5 mx-auto bg-gray-100 border-0 rounded md:mt-4 dark:bg-gray-700 mb-10">


        <div class="flex">
    <!-- Left side with quiz content -->
    <div class="flex-none w-full md:w-10/12" >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            <NuxtLink v-for="(quiz, key) in quizzes" :key="key" :to="'/play-quiz?quiz=' + key"
                class="relative overflow-hidden rounded-lg shadow-md group hover:shadow-lg hover:shadow-emerald-500/50 transition duration-300">
                <div class="flex-row items-center justify-center h-full p-4 bg-white rounded-lg bg-opacity-90">
                    <h3 class="text-lg font-semibold mb-2">{{ quiz.label }}</h3>
                    <p class="text-sm text-gray-600">{{ quiz.description }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>

    <!-- Right side with "Powered by FormNX" ad -->
    <div class="flex-none w-2/12 p-4">
        <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="text-lg font-semibold mb-2">Powered by FormNX</h3>
            <ul class="list-disc ml-3 my-4">
                <li class="text-sm text-gray-600 my-2">Create any type of forms in minutes</li>
                <li class="text-sm text-gray-600 my-2">1000's of Templates</li>
                <li class="text-sm text-gray-600 my-2">Use free forever</li>
            </ul>

            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 mt-4" href="https://formnx.com/?ref=quiz" target="_blank">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Get Started Free
</span>
</a>


        </div>
    </div>
</div>



        


    </div>
</template>

<script>
import { ref } from "vue";

export default {
    data() {
        return {
            quizzes: {
                Copywriters: { url: "https://formnx.com/f/13um64", label: "📝 Quiz for Copywriters", description: "Test your copywriting skills" },
                CopywritersAdvance: { url: "https://formnx.com/f/83yj48", label: "🚀 Quiz for Copywriters (Advance)", description: "Advanced copywriting quiz" },
                webdev: { url: "https://formnx.com/f/85kf10", label: "💻 Quiz for Web Dev", description: "Web development knowledge test" },
                Seo: { url: "https://formnx.com/f/10ne24", label: "🔍 Quiz for SEO Specialist", description: "SEO specialist quiz" },
                Mindset: { url: "https://formnx.com/f/21ro11", label: "😊 Positive Mindset quiz", description: "Test your positive mindset" },
                Laravel: { url: "https://formnx.com/f/55xu14", label: "🌐 Quiz For Laravel Developer", description: "Laravel developer knowledge quiz" },
                LandingPage: { url: "https://formnx.com/f/20nt15", label: "🏠 Quiz on Building Landing Page", description: "Test your landing page building skills" },
                India: { url: "https://formnx.com/f/21ag52", label: "🇮🇳 How Much You Know About India", description: "Quiz on India's knowledge" },
                Marketers: { url: "https://formnx.com/f/97fj13", label: "📈 Quiz For Marketers!", description: "Quiz for marketers" },
                BuildingInPublic: { url: "https://formnx.com/f/16xv16", label: "🏢 Building in Public Wisdom Quiz", description: "Test your knowledge on building in public" },
            },
        };
    },
};
</script>
