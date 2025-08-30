function setButtonLoading(button, loading = true) {
        if (loading) {
            button.disabled = true;
            button.dataset.originalText = button.innerHTML;
            button.innerHTML = '<span class="spinner spinner-sm spinner-border me-2"></span>Loading...';
        } else {
            button.disabled = false;
            button.innerHTML = button.dataset.originalText;
        }
    }