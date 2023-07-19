<script>
    import "../app.css";
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import PageTransition from "../components/pageTransition.svelte";
    import { page } from "$app/stores";
</script>

    <Navbar/>
        <PageTransition refresh={$page.url.pathname}>
            <slot/>
        </PageTransition>
    <Footer/>

