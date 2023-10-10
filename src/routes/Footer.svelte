<script lang="ts">
    import contact_icon from "$lib/Images/footerIcons/contacts_icon.svg";
    import payment_icon from "$lib/Images/footerIcons/payment_icon.svg";
    import privacy_icon from "$lib/Images/footerIcons/privacy_icon.svg";
    import terms_icon from "$lib/Images/footerIcons/terms_icon.svg";

    import rs_news_icon from "$lib/Images/footerIcons/rs_news_icon.svg";
    import rs_lfjob_icon from "$lib/Images/footerIcons/rs_lfjob_icon.svg";
    import rs_dl_icon from "$lib/Images/footerIcons/rs_dl_icon.svg";
    import rs_megaphone_icon from "$lib/Images/footerIcons/rs_megaphone_icon.svg";

    import kc_fb_icon from "$lib/Images/footerIcons/KeepConnected/kc_fb_icon.svg";
    import kc_ig_icon from "$lib/Images/footerIcons/KeepConnected/kc_ig_icon.svg";
    import kc_mail_icon from "$lib/Images/footerIcons/KeepConnected/kc_mail_icon.svg";
    import kc_rss_icon from "$lib/Images/footerIcons/KeepConnected/kc_rss_icon.svg";
    import kc_tiktok_icon from "$lib/Images/footerIcons/KeepConnected/kc_tiktok_icon.svg";
    import kc_twitter_icon from "$lib/Images/footerIcons/KeepConnected/kc_twitter_icon.svg";


	import Button from "$lib/Components/Button.svelte";
</script>

<footer class="p-4 bg-gradient-to-bl from-blue-700 to-green-400 text-xs sm:text-base flex flex-col gap-5 sm:flex-row justify-evenly">
    <div class="text-white flex flex-col gap-2">
        <h4 class="h4 border-b-2 border-yellow-500 max-w-fit">Useful Links</h4>

        <div class="flex items-center gap-1">
            <img src={terms_icon} alt="loading" class="w-6" />
            <a href="/" class="text-black hover:scale-105 active:scale-95 underline font-semibold">Terms and Conditions</a>
        </div>
        
        <div class="flex items-center gap-1">
            <img src={privacy_icon} alt="loading" class="w-6" />
            <a href="/" class="text-black hover:scale-105 active:scale-95 underline font-semibold">Privacy Policy</a>
        </div>

        <div class="flex items-center gap-1">
            <img src={payment_icon} alt="loading" class="w-6" />
            <a href="/" class="text-black hover:scale-105 active:scale-95 underline font-semibold">Payment Options</a>
        </div>
        

        <div class="flex items-center gap-1">
            <img src={contact_icon} alt="loading" class="w-6" />
            <a href="/" class="text-black hover:scale-105 active:scale-95 underline font-semibold">Contacts</a>
        </div>
    </div>

    <div class="text-white flex flex-col gap-2">
        <h4 class="h4 border-b-2 border-yellow-500 max-w-fit">Resources</h4>

        <div class="flex items-center gap-1">
            <img src={rs_news_icon} alt="loading" class="w-6" />
            <a href="/" class="text-black hover:scale-105 active:scale-95 underline font-semibold">News and updates</a>
        </div>

        <div class="flex items-center gap-1">
            <img src={rs_lfjob_icon} alt="loading" class="w-6" />
            <a href="/" class="text-black hover:scale-105 active:scale-95 underline font-semibold">Looking for a job?</a>
        </div>

        <div class="flex items-center gap-1">
            <img src={rs_dl_icon} alt="loading" class="w-6" />
            <a href="/" class="text-black hover:scale-105 active:scale-95 underline font-semibold">Download Forms</a>
        </div>

        <div class="flex items-center gap-1">
            <img src={rs_megaphone_icon} alt="loading" class="w-6" />
            <a href="/" class="text-black hover:scale-105 active:scale-95 underline font-semibold">Our Campaigns</a>
        </div>
    
        
    </div>

    <div class="border-[0.1rem] p-2 bg-[#00000050]">
        <h4 class="h4 text-center text-white">SIGNUP AND GET THE LATEST NEWS</h4>
        <input type="email" class="input rounded-none" placeholder="Add your email address to subscribe" />
        <div class="flex mt-2">
            <div class="w-full"></div>
            <Button title="Subscribe"/>
            <div class="w-full"></div>
        </div>
    </div>

    <div class="flex flex-col gap-2 ">
        <h4 class="h4 text-center text-white">KEEP CONNECTED</h4>
        <div class="flex flex-col gap-1 text-white">
            <div class="flex gap-1 items-center">
                <img src={kc_fb_icon} alt="loading" class="w-6" />
                <a href="/" class="text-black underline hover:scale-105 active:scale-95">Facebook</a>
            </div>
            
            <div class="flex gap-1 items-center">
                <img src={kc_ig_icon} alt="loading" class="w-6" />
                <a href="/" class="text-black underline hover:scale-105 active:scale-95">Instagram</a>
            </div>

            <div class="flex gap-1 items-center">
                <img src={kc_tiktok_icon} alt="loading" class="w-6" />
                <a href="/" class="text-black underline hover:scale-105 active:scale-95">Tiktok</a>
            </div>

            <div class="flex gap-1 items-center">
                <img src={kc_twitter_icon} alt="loading" class="w-6" />
                <a href="/" class="text-black underline hover:scale-105 active:scale-95">Twitter</a>
            </div>

            <div class="flex gap-1 items-center">
                <img src={kc_mail_icon} alt="loading" class="w-6" />
                <a href="/" class="text-black underline hover:scale-105 active:scale-95">mainannapolisfinance@gmail.com</a>
            </div>

            <div class="flex gap-1 items-center">
                <img src={kc_rss_icon} alt="loading" class="w-6" />
                <a href="/" class="text-black underline hover:scale-105 active:scale-95">RSS</a>
            </div>
            
        </div>
    </div>

    
</footer>
<div class="bg-black ">
        <p class="text-xs text-white sm:text-base text-center p-4">Copyright 2023 Annapolis Finance Inc.</p>
</div>