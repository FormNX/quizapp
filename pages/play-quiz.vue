<template>

<span>
    <Head>
      <Title>Quiz For You ~ Fun Practical QUizzes</Title>
      <Meta name="description" content="Quiz For You ~ Fun Practical QUizzes (V2)" />
      <Meta name="og:image" content="/quiz.png" />
      <Meta name="twitter:image" content="/quiz.png" />
    </Head>

    <div class="w-full">
        <a class="btn btn-xs ml-1 mt-1" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
            </svg>
            Back
        </a>
    </div>

    <div class="w-full">
        <iframe :src="src" frameborder="0" style="width: 1px; min-width: 100%;" :id="iframe_id"></iframe>
    </div>
    
    
    <div class="flex justify-center w-full p-4">
    <div class="bg-gray-200 p-4 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Powered by <a href="https://formnx.com/?ref=quiz" target="_blank">FormNX</a></h3>

        <ul class="list-none space-y-2 text-sm">
            <li class="flex items-center before:content-['✔'] before:text-green-500 before:mr-2">
                Create forms in minutes
            </li>
            <li class="flex items-center before:content-['✔'] before:text-green-500 before:mr-2">
                1000's of Templates
            </li>
            <li class="flex items-center before:content-['✔'] before:text-green-500 before:mr-2">
                Use free forever
            </li>
        </ul>

        <!-- Centered Button -->
        <div class="flex justify-center mt-4">
            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                href="https://formnx.com/?ref=quiz" target="_blank">
                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get Started Free
                </span>
            </a>
        </div>
    </div>
</div>




</span>
</template>
  
<script>
import { ref } from "vue";

export default {
    data() {
        return {

            quizzes: {
                Copywriters: { url: "https://formnx.com/f/13um64", label: "📝 Quiz for Copywriters", description: "Test your copywriting skills", iframe_id: "if13um64" },
                CopywritersAdvance: { url: "https://formnx.com/f/83yj48", label: "🚀 Quiz for Copywriters (Advance)", description: "Advanced copywriting quiz", iframe_id: "if83yj48" },
                webdev: { url: "https://formnx.com/f/85kf10", label: "💻 Quiz for Web Dev", description: "Web development knowledge test", iframe_id: "if85kf10" },
                Seo: { url: "https://formnx.com/f/10ne24", label: "🔍 Quiz for SEO Specialist", description: "SEO specialist quiz", iframe_id: "if10ne24" },
                Mindset: { url: "https://formnx.com/f/21ro11", label: "😊 Positive Mindset quiz", description: "Test your positive mindset", iframe_id: "if21ro11" },
                Laravel: { url: "https://formnx.com/f/55xu14", label: "🌐 Quiz For Laravel Developer", description: "Laravel developer knowledge quiz", iframe_id:  "if55xu14" },
                LandingPage: { url: "https://formnx.com/f/20nt15", label: "🏠 Quiz on Building Landing Page", description: "Test your landing page building skills", iframe_id: "if20nt15" },
                India: { url: "https://formnx.com/f/21ag52", label: "🇮🇳 How Much You Know About India", description: "Quiz on India's knowledge", iframe_id: "if21ag52" },
                Marketers: { url: "https://formnx.com/f/97fj13", label: "📈 Quiz For Marketers!", description: "Quiz for marketers", iframe_id: "if97fj13" },
                BuildingInPublic: { url: "https://formnx.com/f/16xv16", label: "🏢 Building in Public Wisdom Quiz", description: "Test your knowledge on building in public", iframe_id: "if16xv16"},
                WordPress: { url: "https://formnx.com/f/46xx85", label: "🔍 WordPress Quiz", description: "Test your knowledge about WordPress", iframe_id: "if46xx85"},
                TechStartups: { url: "https://formnx.com/f/71ll98", label: "🚀 Tech Startups Quiz!", description: "Quiz on tech startups", iframe_id: "if71ll98"},
                HealthAndWellness: { url: "https://formnx.com/f/51um56", label: "💪 Health and Wellness Ventures Quiz!", description: "Quiz on health and wellness ventures", iframe_id: "if51um56"},
                GoogleSearchSkills: { url: "https://formnx.com/f/google-search-skills-68ft17", iframe_id: "if68ft17", label: "🔍 Quiz on Google Search Skills !", description: "Test your Google search prowess with a quick quiz on search skills. "},
            },


            src: '',
            iframe_id: ''
            
        };
    },
    mounted() {
        this.quiz_details();

        const iframeResizerScript = document.createElement("script");
        iframeResizerScript.src = "https://formnx.com/js/iframeResizer.js";

        iframeResizerScript.onload = () => {
            // Only load widgetScript after iframeResizerScript is loaded
            const widgetScript = document.createElement("script");
            widgetScript.src = "https://formnx.com/js/widget.js";
            document.head.appendChild(widgetScript);
        };

        document.head.appendChild(iframeResizerScript);
    },

    methods: {
        quiz_details() {
            const input_quiz = this.$route.query.quiz;
            if (input_quiz && this.quizzes[input_quiz]) {
                this.src = this.quizzes[input_quiz].url;
                this.iframe_id = this.quizzes[input_quiz].iframe_id;
            } else {
                console.error("Invalid quiz specified in the route");
            }
        },
        goBack() {
            // Perform back navigation
            window.location.href = '/';
        }
    },
};
</script>
