<template>
    <section class="hero">
        <div class="container">
            <div class="columns">
                <div class="column hero__left">

                    <div class="hero__text">
                        <h1 class="title is-1">
                            Get Connected.<br>
                            Get Notified.<br>
                            Save Lives.<br>
                        </h1>
                        <p class="subtitle">
                            Instantly learn if you’ve come into contact with someone infected with CoronaVirus. Avoid further contact. Get help. Save lives.
                        </p>
                    </div>

                    <div class="hero__cta">
                        <b-button type="is-primary">Get Protected</b-button>
                        <b-button type="is-text">Learn More</b-button>
                    </div>
   
                </div>
                <div class="column hero__right">
                    <TraceBubbles class="bubbles"/>
                    <PushNotification class="push-notification" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TraceBubbles from '~/assets/images/TraceBubbles'
import PushNotification from '~/assets/images/PushNotification'

export default {
    components: {
        TraceBubbles,
        PushNotification
    }    
}
</script>

<style lang="scss" scoped>
.hero {
    padding: 4rem 0;

    &__left {
        display: flex;
        flex-direction: column;   
        justify-content: center;      
    }

    &__text {
        .title {
            font-size: 4rem;

            @include from($desktop) {
                font-size: 3rem;
            }
        }

        .subtitle {
            margin: 2rem 0;
        }
    }

    &__right {
        position: relative;
        text-align: right;

        .push-notification {
            position: absolute;
            top: 4rem;
            left: 11rem;

            @include from($desktop) {
                top: 9rem;
                left: 8rem;
            }
        }
    }
}
</style>