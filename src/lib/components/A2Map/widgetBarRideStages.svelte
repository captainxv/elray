<script lang="ts">
   import Ray from "$lib/components/A2Map/assets/Ray.svelte";
   import Pickup from "$lib/components/A2Map/assets/Pickup.svelte";
   import Pilot from "$lib/components/A2Map/assets/Pilot.svelte";
   import Route from "$lib/components/A2Map/assets/Route.svelte";
   import Arrival from "$lib/components/A2Map/assets/Arrival.svelte";
   
   let className = '';
   export { className as class };
 </script>
   
 <div class="{className} route-progress-route-progress">
   <div class="route-progress-t-ray">
     <Ray class="route-progress-ray"/>
   </div>
 
   <div class="route-progress-t-pickup-pilot-route-arrival">
     <Pickup class="route-progress-pickup"/>
     <Pilot class="route-progress-pilot"/>
     <Route class="route-progress-route"/>
     <Arrival class="route-progress-arrival"/>
   </div>
 </div>
 
 <style>
   .route-progress-route-progress {
     display: flex;
     flex-direction: column;
     gap: 16px;
     align-items: center;
     width: 100%;
   }
 
   .route-progress-t-ray {
     display: flex;
     justify-content: center;
     width: 100%;
   }
 
   .route-progress-t-pickup-pilot-route-arrival {
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     padding: 0 16px;
   }
 
   :global(.route-progress-ray),
   :global(.route-progress-pickup),
   :global(.route-progress-pilot),
   :global(.route-progress-route),
   :global(.route-progress-arrival) {
     width: 24px;
     height: 24px;
   }
 </style>
 