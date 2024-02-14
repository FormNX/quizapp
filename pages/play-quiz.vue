<template>
    <div>

        <a class="btn btn-xs" @click="goBack">
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
        <iframe :src="src" frameborder="0" style="width: 1px; min-width: 100%;"></iframe>
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
                seo: { url: "https://formnx.com/f/83yj48", label: "🔍 Quiz for SEO Specialist", description: "SEO specialist quiz" },
                mindset: { url: "https://formnx.com/f/21ro11", label: "😊 Positive Mindset quiz", description: "Test your positive mindset" },
                laravel: { url: "https://formnx.com/f/55xu14", label: "🌐 Quiz For Laravel Developer", description: "Laravel developer knowledge quiz" },
                LandingPage: { url: "https://formnx.com/f/20nt15", label: "🏠 Quiz on Building Landing Page", description: "Test your landing page building skills" },
                india: { url: "https://formnx.com/f/21ag52", label: "🇮🇳 How Much You Know About India", description: "Quiz on India's knowledge" },
                marketers: { url: "https://formnx.com/f/97fj13", label: "📈 Quiz For Marketers!", description: "Quiz for marketers" },
                buildingInPublic: { url: "https://formnx.com/f/16xv16", label: "🏢 Building in Public Wisdom Quiz", description: "Test your knowledge on building in public" },
            },


            src: '',
        };
    },
    mounted() {
        this.quiz_details();

        const iframeResizerScript = document.createElement("script");
        iframeResizerScript.src = "https://formnx.com/js/iframeResizer.js";
        document.head.appendChild(iframeResizerScript);

        const widgetScript = document.createElement("script");
        widgetScript.src = "https://formnx.com/js/widget.js";
        document.head.appendChild(widgetScript);
    },

    methods: {
        quiz_details() {
            const input_quiz = this.$route.query.quiz;
            if (input_quiz && this.quizzes[input_quiz]) {
                this.src = this.quizzes[input_quiz].url;
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