<template>
    <div class="container profile-page">
        <div class="row">
            <div class="col-md-4">
                <div class="page-block avatar-block">
                    <div>
                        <div class="avatar">
                            <img src="../../assets/images/camera_50.png">
                        </div>
                        <div class="actions">
                            <button class="btn btn-primary">Write message</button>
                            <button class="btn btn-primary">Add friend</button>
                        </div>
                    </div>
                </div>
                <div class="page-block friends-block">
                    <div class="counter">
                        Friends <span>6</span>
                    </div>
                    <ul class="friends-list">
                        <li>
                            <img src="../../assets/images/camera_50.png">
                            <span>Ivan</span>
                        </li>
                        <li>
                            <img src="../../assets/images/camera_50.png">
                            <span>Ivan</span>
                        </li>
                        <li>
                            <img src="../../assets/images/camera_50.png">
                            <span>Ivan</span>
                        </li>
                        <li>
                            <img src="../../assets/images/camera_50.png">
                            <span>Ivan</span>
                        </li>
                        <li>
                            <img src="../../assets/images/camera_50.png">
                            <span>Ivan</span>
                        </li>
                        <li>
                            <img src="../../assets/images/camera_50.png">
                            <span>Ivan</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-8">
                <div class="page-block profile-info-block">
                    <div class="">
                        <div class="name">
                            {{user}}
                        </div>
                        <div class="info">
                            <div class="info-row">
                                <div class="label">
                                    Birthday:
                                </div>
                                <div class="data">
                                    April 9, 1996
                                </div>
                            </div>
                            <div class="info-row">
                                <div class="label">
                                    Current city:
                                </div>
                                <div class="data">
                                    Plovdiv
                                </div>
                            </div>
                            <div class="info-row">
                                <div class="label">
                                    University:
                                </div>
                                <div class="data">
                                    Plovdiv University
                                </div>
                            </div>
                        </div>
                        <div class="profile-stats">
                            <ul>
                                <li><span>6</span>friends</li>
                                <li><span>10</span>images</li>
                                <li><span>4</span>files</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="images-block page-block">
                    <div class="header">
                        Ivan's photos
                        <span class="counter">150</span>
                    </div>
                    <div class="images-list">
                        <ul>
                            <li>
                                <img src="../../assets/images/camera_50.png">
                            </li>
                            <li>
                                <img src="../../assets/images/camera_50.png">
                            </li>
                            <li>
                                <img src="../../assets/images/camera_50.png">
                            </li>
                            <li>
                                <img src="../../assets/images/camera_50.png">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['user'],
  name: 'Profile',
  components: {},
};
</script>
