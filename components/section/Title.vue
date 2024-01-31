<template>
    <div class="title">
        <ClientOnly>
            <slot name="default" />
        </ClientOnly>
        
    </div>
</template>

<style>
    .title {
        display: flex;
        flex-direction: column;
        width: 65%;
        font-size: 46px;
        text-transform: uppercase;
        font-weight: lighter;
        margin-top: 70px;
        line-height: 1;
    }

    @media screen and (max-width: 1280px) {
        .title {
            font-size: 38px;
        }
    }

    @media screen and (max-width: 1024px) {
        .title {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 768px) {
        .title {
            font-size: 18px;
            width: 65%;
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 425px) {
        .title {
            background-color: rgb(255, 255, 255, 0.7);
            font-size: 16px;
            width: 80%;
        }
    }

    @media screen and (max-width: 375px) {
        .title {
            font-size: 12px;
        }
    }



</style>