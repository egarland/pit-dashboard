<style>

  .header {
    margin: 30px 30px 10px;
    background: #000000;
    z-index: 5;
    position: relative;
    padding: 8px;
    border: 3px solid white;
    text-align: center;
    color: #f6f6f6;
  }
  .form-group {
    padding: 8px;
  }
  .form-control {
    background-color: #f6f6f6;
  }

</style>

<div class="container">
	<div> <h1 class="header">Configure Pit Display</h1> </div>
	<form method="get" action="/pit">
		<div class="form-group">
			<h3><label for="eventKeyInput">Event Key:</label></h3>
			<input type="text" id="eventKeyInput" class="form-control" name="eventKey" />
		</div>
		<div class="form-group">
			<h3><label for="teamNumberInput">Team Number:</label></h3>
			<input type="number" id="teamNumberInput" class="form-control" min="1" name="teamNumber" value="8708" />
		</div>
		<!-- <div class="form-group">
				<label for="intervalInput">Update Interval (ms):</label>
				<input
					type="number"
					id="intervalInput"
					class="form-control"
					bind:value={$preferences.updateIntervalMs}
					min="1000"
					step="1000"
				/>
			</div> -->
		<div class="form-group">
			<button class="btn btn-success">Save</button>
		</div>
	</form>
</div>
