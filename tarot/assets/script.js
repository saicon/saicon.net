<script>
  const fileInput = document.getElementById('petUpload');
  const previewImg = document.getElementById('previewImg');

  fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImg.src = e.target.result;
        previewImg.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      previewImg.src = "";
      previewImg.style.display = 'none';
    }
  });
</script>
