<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
</script>

<div class="w-full border-t-2 border-black ">
    <div class="main grid grid-cols-2 my-5 ">
        <div class="text-left font-bold text-6x">
            <img src="signature2.svg" alt="" class="h-20 my-2"/>
        </div>
        <div class="cursor-pointer my-auto">
            <a href="https://www.instagram.com/juliancaf" target="_blank">
                <Fa icon={faInstagram} color=black size=2x pull="right" class="mx-2"/>
            </a>
            <a href="https://www.linkedin.com/in/julian-chin-a-foeng-909465183/" target="_blank">
                <Fa icon={faLinkedin} color=black size=2x pull="right" class="mx-2"/>
            </a>
            <a href="https://github.com/julianpmcaf" target="_blank">
                <Fa icon={faGithub} color=black size=2x pull="right" class="mx-2"/>
            </a>
        </div>
    </div>
</div>