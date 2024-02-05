<template>
    <div class="title">
            <slot name="default" />
    </div>
</template>

<style>
    .title {
        display: flex;
        width: 65%;
        flex-direction: column;
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
            background-color: rgb(255, 255, 255, 0.7);
            width: fit-content;
            max-width: 200px;
            padding: 5px;
            font-size: 16px;
            margin-top: 20px;
            margin-bottom: 5px;
        }
    }

    @media screen and (max-width: 425px) {
        .title {
            font-size: 14px;
            width: 80%;
        }
    }

    @media screen and (max-width: 375px) {
        .title {
            font-size: 12px;
        }
    }



</style>