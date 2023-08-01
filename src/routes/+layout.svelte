<script>
    import "../app.css";
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import PageTransition from "../components/pageTransition.svelte";

    export let data
</script>

    <Navbar/>
       <PageTransition key={data.url}>
                <slot/>
        </PageTransition>
    <Footer/>

