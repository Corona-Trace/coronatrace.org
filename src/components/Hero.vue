<template>
    <section class="section hero">
        <div class="container">
            <div class="columns">
                <div class="column is-5 hero__left">

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
                <div class="column is-7 hero__right">
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
    padding-top: 8rem;
    padding-bottom: 8rem;

    &__left {
        display: flex;
        flex-direction: column;   
        justify-content: center;
        padding-bottom: 4rem;

        @include from($desktop) {
            padding-bottom: 0;
        }
    }

    &__text {
        .title {
            font-size: 3rem;
        }

        .subtitle {
            padding: 2rem 0;
        }
    }

    &__cta {
        display: flex;
        flex-direction: column;

        @include from($desktop) {
            flex-direction: row;
        }

        .button {
            display: flex;
            justify-content: center;
            width: 100%;
            font-size: 1.25rem;
            margin: .5rem 0;

            @include from($desktop) {
                width: auto;
            }

            &.is-primary {
                @include box_shadow(1);

                @include from($desktop) {
                    margin-right: 1rem;
                }
            }
        }
    }

    &__right {
        position: relative;
        text-align: right;
        overflow: hidden;

        .bubbles {
            width: 100%;
            height: 40vh;

            @include from($desktop) {
                width: auto;
                height: auto;
            }
        }

        .push-notification {
            position: absolute;
            top: 1rem;
            left: 9rem;
            width: 54%;

            @include from($desktop) {
                top: 9rem;
                left: 8rem;
                width: auto;
            }
        }
    }
}
</style>