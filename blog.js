let dataBlog = []

function addBlog(event) {
    event.preventDefault()

    let project = document.getElementById("input-project").value
    let starDate = document.getElementById("input-star-date").value
    let endDate = document.getElementById("input-end-date").value
    let content = document.getElementById("input-content").value
    let cekbox1 = document.getElementById("checkbox1").value
    let cekbox2 = document.getElementById("checkbox2").value
    let cekbox3 = document.getElementById("checkbox3").value
    let cekbox4 = document.getElementById("checkbox4").value

    let image  = document.getElementById("input-blog-image").files[0]

    // buat url gambar nantinya tampil

    image = URL.createObjectURL(image)
    //console.log(image)

    let blog = {
        project,
        starDate,
        endDate,
        content,
        cekbox1,
        cekbox2,
        cekbox3,
        cekbox4,
        image,
        postAt: new Date(),
        author: "Abel Dustin"
    }

    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        console.log("test",dataBlog[index])

        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}">
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">
                        ${dataBlog[index].project}
                    </a>
                </h1>
                <div class="detail-blog-content">
                    12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
                </div>
                <p>
                    ${dataBlog[index].content}
                </p>
            </div>
        </div>
        `
    }
}
