<script>
export default {
    name: 'ContactsView'
}
</script>

<template>
    <div class="container text-white">
        
        <div class="jumbo row row-cols-md-2">
            <div class="col-md-8 mb-3">
                <h1 class="contact-title text-uppercase mb-4">Contacts</h1>
                <form action="" method="GET">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name and Surname</label>
                        <input type="text" class="form-control w-75" name="name" id="name"
                            placeholder="Type your name and surname">
                    </div>
                    <div class="mb-3">
                        <label for="mail" class="form-label">Mail</label>
                        <input type="mail" class="form-control w-75" name="mail" id="mail" placeholder="Type your mail">
                    </div>
                    <div class="mb-4">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control w-75" name="description" id="description" rows="3"
                            placeholder="Type your description"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
            <div class="col-md-4 d-flex justify-content-end">
                <img src="../assets/img/piatto-di-laici-retro-ricevitore-telefonico-con-bolle-di-chat.png" class="my-img-home">
            </div>
        </div>


    </div>
</template>
