<template>
    <section class="section how-it-works home-section">
        <div class="container">
            <div class="how-it-works__heading">
                <h2 class="is-2">How It Works</h2>
            </div>
            <div class="columns">
                <div class="column how-it-works__item">
                    <b-icon
                        class="how-it-works__icon"
                        size="is-large" 
                        icon="cellphone-arrow-down">
                    </b-icon>
                    <div class="item__text">
                        <h4>Download App</h4>
                        <p>Go to Apple app store, download the app, and create an account</p>
                    </div>
                </div>
                <div class="column how-it-works__item">
                    <b-icon
                        class="how-it-works__icon"
                        size="is-large" 
                        icon="tooltip-account">
                    </b-icon>
                    <div class="item__text">
                        <h4>Securely Share Location History</h4>
                        <p>Follow a few easy steps to securly and anonymously share your location history.</p>
                    </div>
                </div>
                <div class="column how-it-works__item">
                    <b-icon
                        class="how-it-works__icon"
                        size="is-large" 
                        icon="clipboard-pulse-outline">
                    </b-icon>
                    <div class="item__text">
                        <h4>Share If You’ve Been Tested</h4>
                        <p>We’ll ask you if you’ve been tested and whether or not you’ve tested positive for CoronaVirus.</p>
                    </div>
                </div>
                <div class="column how-it-works__item">
                    <b-icon 
                        class="how-it-works__icon"
                        size="is-large"
                        icon="message-text-outline">
                    </b-icon>
                    <div class="item__text">
                        <h4>Get Notified</h4>
                        <p>We’ll use that data that you and others have shared to notify you if you’ve unknowingly come into contact with the virus.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.how-it-works {
    background-color: $blue-light;

    &__heading {
        text-align: center;
        margin-bottom: 4rem;
        
        @include from($desktop) { 
            margin-bottom: 8rem;
        }

        h2 {
            font-size: 2.5rem;
            font-weight: bold;
            
            @include from($desktop) { 
                font-weight: 3rem;
            }
        }
    }

    &__item {
        padding: 2rem;
        display: flex;
        flex-direction: row;
        
        
        @include from($desktop) { 
            padding: 0 2.75rem;
            flex-direction: column;    
        }
    
         h4 {
            font-weight: 700;
            font-size: 1.5rem;
            margin-bottom: .5rem;
            
            @include from($desktop) {
                margin-bottom: 2rem;
            }
            
        }
    }

    &__icon {
        padding-right: 1.5rem;
        color: $blue;
        margin-bottom: .5rem;
        height: 6rem;
        width: 6rem;
        
        @include from($desktop) {
            padding-right: 0;
            height: 3rem;
            width: 3rem;
        }

        i {
            &::before {
                font-size: 6rem;
            }   
        }
    }

}
</style>