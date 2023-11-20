<script>
export default {
    name: 'ContactsView'
}
</script>

<template>
    <div class="container">
        <h1>Contacts</h1>
        <form action="" method="GET">
            <div class="mb-3">
                <label for="name" class="form-label">Name and Surname</label>
                <input type="text" class="form-control" name="name" id="name" placeholder="Type your complete name">
            </div>
            <div class="mb-3">
                <label for="mail" class="form-label">Mail</label>
                <input type="mail" class="form-control" name="mail" id="mail" placeholder="Type your mail">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" name="description" id="description" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>
