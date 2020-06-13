<template>
    <div class="page-block p-0 library-page">
        <div class="header">
            <div class="heading">
                File Library
            </div>
            <div class="search-files">
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend px-1">
                        <span id="inputGroup-sizing-sm"
                            class="input-group-text bg-transparent text-primary border-0">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                    <input type="text" placeholder="Search.."
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"
                       class="form-control bg-transparent border-0 text-primary">
                </div>
            </div>
        </div>
            <div class="suggesting-file-list">
                  <div class="file-box">
                    <div class="file d-flex align-items-start">
                      <div class="file-title">
                        Lorem Ipsum
                       </div>
                       <div class="file-icon">
                        <img src="../../assets/images/files/doc.png">
                      </div>
                    </div>
                 </div>
                 <div class="file-box">
                    <div class="file d-flex align-items-start">
                      <div class="file-title">
                        Lorem Ipsum
                       </div>
                       <div class="file-icon">
                        <img src="../../assets/images/files/pdf.png">
                      </div>
                    </div>
                 </div>
                 <div class="file-box">
                    <div class="file d-flex align-items-start">
                      <div class="file-title">
                        Lorem Ipsum
                       </div>
                       <div class="file-icon">
                        <img src="../../assets/images/files/ppt.png">
                      </div>
                    </div>
                 </div>
           </div>
        <div class="documents-explore-list">
         <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Modified On</th>
      <th scope="col">Modified By</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr class="file-details">
      <th scope="row">
          <div class="file-info file d-flex align-items-start">
            <img src="../../assets/images/files/folder.png">
            <div class="file-title">New Folder</div>
          </div>
      </th>
      <td><div class="modify-date"></div>13 Juny, 2:25AM</td>
      <td>Ivan Ivanov</td>
      <td>
        <div class="details">
        <a href="#"><i class="fa fa-edit"></i></a><a href="#"><i class="fa fa-trash"></i></a>
        </div>
      </td>
    </tr>
    <tr class="file-details">
      <th scope="row">
        <div class="file-info file d-flex align-items-start">
            <img src="../../assets/images/files/pdf.png">
            <div class="file-title">PDF File</div>
        </div>
      </th>
      <td>Today</td>
      <td>Stoyan Stoyanov</td>
      <td>
        <div class="details">
        <a href="#"><i class="fa fa-edit"></i></a><a href="#"><i class="fa fa-trash"></i></a>
        </div>
      </td>
    </tr>
      <tr class="file-details">
      <th scope="row">
          <div class="file-info file d-flex align-items-start">
            <img src="../../assets/images/files/folder.png">
            <div class="file-title">New Folder 1</div>
          </div>
      </th>
      <td><div class="modify-date"></div>11 Juny, 6:05PM</td>
      <td>Dimitri Dimitrov</td>
      <td>
        <div class="details">
        <a href="#"><i class="fa fa-edit"></i></a><a href="#"><i class="fa fa-trash"></i></a>
        </div>
      </td>
    </tr>
    <tr class="file-details">
      <th scope="row">
          <div class="file-info file d-flex align-items-start">
            <img src="../../assets/images/files/zip.png">
            <div class="file-title">ZIP File</div>
          </div>
      </th>
      <td><div class="modify-date"></div>Yesterday</td>
      <td>Stoicho Ivanov</td>
      <td>
        <div class="details">
        <a href="#"><i class="fa fa-edit"></i></a><a href="#"><i class="fa fa-trash"></i></a>
        </div>
      </td>
    </tr>
     <tr class="file-details">
      <th scope="row">
          <div class="file-info file d-flex align-items-start">
            <img src="../../assets/images/files/jpg.png">
            <div class="file-title">JPG File</div>
          </div>
      </th>
      <td><div class="modify-date"></div>13 Juny, 10:07AM</td>
      <td>Georgi Stoyanov</td>
      <td>
        <div class="details">
        <a href="#"><i class="fa fa-edit"></i></a><a href="#"><i class="fa fa-trash"></i></a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Friends',
  components: {},
  mounted() {
    this.$store.commit('layouts/SET_LAYOUT', 'left-right-sidebars-layout');
    this.$store.commit('layouts/SET_LEFT_SIDEBAR', 'library-sidebar');
  },
};
</script>
