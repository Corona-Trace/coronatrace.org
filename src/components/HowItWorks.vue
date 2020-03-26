<template>
    <section class="how-it-works home-section">
        <div class="container">
            <div class="how-it-works__heading">
                <h2 class="is-2">How It Works</h2>
            </div>
            <div class="columns">
                <div class="column how-it-works__item">
                    <div class="item__heading">
                        <b-icon
                            size="is-large" 
                            icon="cellphone-arrow-down">
                        </b-icon>
                        <h4>Download App</h4>
                    </div>
                    <p>Go to Apple app store, download the app, and create an account</p>
                </div>
                <div class="column how-it-works__item">
                    <div class="item__heading">
                        <b-icon
                            size="is-large" 
                            icon="tooltip-account">
                        </b-icon>
                        <h4>Securely Share Location History</h4>
                    </div>
                    <p>Follow a few easy steps to securly and anonymously share your location history.</p>
                </div>
                <div class="column how-it-works__item">
                    <div class="item__heading">
                        <b-icon
                            size="is-large" 
                            icon="clipboard-pulse-outline">
                        </b-icon>
                        <h4>Share If You’ve Been Tested</h4>
                    </div>
                    <p>We’ll ask you if you’ve been tested and whether or not you’ve tested positive for CoronaVirus.</p>
                </div>
                <div class="column how-it-works__item">
                    <div class="item__heading">
                        <b-icon size="is-large" icon="message-text-outline"></b-icon>
                        <h4>Get Notified</h4>
                    </div>
                    <p>We’ll use that data that you and others have shared to notify you if you’ve unknowingly come into contact with the virus.</p>
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
        margin-bottom: 8rem;

        h2 {
            font-size: 3rem;
        }
    }

    &__item {
        padding: 0 2.75rem;

        .item {
            &__heading {
                margin-bottom: 1.5rem;

                h4 {
                    font-weight: 500;
                    font-size: 1.25rem;
                    margin-bottom: 0;
                }
            }
        }

        .icon {
            color: $blue;
            margin-bottom: .5rem;
        }
    }

}
</style>